import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { isMongoId } from 'class-validator';

import { ProductsService } from '../products/products.service';
import { CategoriesService } from '../categories/categories.service';
import { Languages } from '../translation/models';
import { TranslationService } from '../translation/translation.service';
import { Product } from '../products/schemas';
import { Category } from '../categories/schemas';

import { RecipeUA, RecipeEN, Recipe, ShortCategory, Ingredient } from './schemas';
import { CreateRecipeDto, UpdateImageDto, UpdateTagsDto } from './dto';

@Injectable()
export class RecipeService {
  @InjectModel(RecipeUA.name) private recipeModelUA: Model<Recipe>;
  @InjectModel(RecipeEN.name) private recipeModelEN: Model<Recipe>;
  @Inject(CategoriesService) private readonly categoriesService: CategoriesService;
  @Inject(ProductsService) private readonly productsService: ProductsService;
  @Inject(TranslationService) private readonly translationService: TranslationService;

  findOneById(id: string): Promise<Recipe | undefined> {
    if (!isMongoId(id)) {
      return Promise.resolve(undefined);
    }

    return this.translationService.forCurrentLanguage({
      ua: () => this.recipeModelUA,
      en: () => this.recipeModelEN
    }).findOne({ _id: id }).exec().then((item) => item?.toJSON());
  }

  async updateImage(id: string, updateImageDto: UpdateImageDto): Promise<void> {
    if (!isMongoId(id)) {
      throw new Error(`Given id ${id} is not valid mongo id`);
    }

    const recipeUA = await this.recipeModelUA.findOne({ _id: id }).exec();
    const recipeEN = await this.recipeModelEN.findOne({ _id: id }).exec();

    if (!recipeUA || !recipeEN) {
      throw new Error(`Recipe by id:${id} not found!`);
    }

    recipeUA.updateOne({ image: updateImageDto.image }).exec();
    recipeEN.updateOne({ image: updateImageDto.image }).exec();

    await recipeUA.save();
    await recipeEN.save();
  }

  async updateTags(id: string, updateTagsDto: UpdateTagsDto): Promise<void> {
    if (!isMongoId(id)) {
      throw new Error(`Given id ${id} is not valid mongo id`);
    }

    const recipe = await this.translationService.forCurrentLanguage({
      ua: () => this.recipeModelUA,
      en: () => this.recipeModelEN
    }).findOne({ _id: id }).exec();

    if (!recipe) {
      throw new Error(`Recipe by id:${id} not found!`);
    }

    switch (updateTagsDto.strategy) {
      case 'replace': {
        recipe
          .updateOne({ tags: updateTagsDto.tags })
          .exec();
        break;
      }

      case 'merge': {
        recipe
          .updateOne({
            tags: [
              ...new Set([...updateTagsDto.tags, ...recipe.tags])]
          })
          .exec();
        break;
      }
    }

    await recipe.save();
  }

  async create(createRecipeDto: CreateRecipeDto): Promise<void> {
    if (await this.recipeModelUA.findOne({ title: createRecipeDto.translations.ua.title }).exec()) {
      throw new Error(`Recipe with title ${createRecipeDto.translations.ua.title} already exists`);
    }

    if (await this.recipeModelEN.findOne({ title: createRecipeDto.title }).exec()) {
      throw new Error(`Recipe with title ${createRecipeDto.title} already exists`);
    }

    const categories: Array<ShortCategory & Pick<Category, 'translations'>> = [];
    for (const categoryId of createRecipeDto.categories) {
      const category = await this.categoriesService.findOneById(categoryId);

      if (!category) {
        throw new Error(`Category ${categoryId} does not exist`);
      }

      categories.push({
        title: category.title,
        type: category.type,
        translations: category.translations,
      });
    }

    let kCal = 0;
    let fats = 0;
    let carbs = 0;
    let proteins = 0;
    const ingredients: Array<Ingredient & Pick<Product, 'translations'>> = [];

    for (const ingredient of createRecipeDto.ingredients) {
      const product = await this.productsService.findOneById(ingredient.id);

      if (!product) {
        throw new Error(`Product ${ingredient.id} does not exist`);
      }

      const getNutritionFor = this.productsService.createGetterNutritionByAmount(ingredient.amount);

      kCal += getNutritionFor(product.kCal);
      fats += getNutritionFor(product.fats);
      carbs += getNutritionFor(product.carbs);
      proteins += getNutritionFor(product.proteins);

      Object.assign(ingredient, {
        units: product.units,
      });

      ingredients.push({
        title: product.title,
        amount: ingredient.amount,
        units: product.units,
        translations: product.translations
      });
    }

    const _id = new Types.ObjectId();

    const createWithLanguage = (language: Languages) => ({
      ...this.translationService.getTranslated({
        _id,
        kCal,
        kCalPer100: Math.round(kCal * 100 / createRecipeDto.amount),
        macroNutrients: {
          fats,
          carbs,
          proteins
        },
        ...createRecipeDto,
      }, language),
      instructions: createRecipeDto.instructions.map((item) => this.translationService.getTranslated(item, language)),
      ingredients: ingredients.map((item) => this.translationService.getTranslated(item, language)),
      categories: categories.map((item) => this.translationService.getTranslated(item, language))
    });

    const recipeUA = new this.recipeModelUA<Omit<Recipe, 'id'>>(createWithLanguage(Languages.UA));

    const recipeEN = new this.recipeModelEN<Omit<Recipe, 'id'>>(createWithLanguage(Languages.EN));

    await Promise.all([
      recipeUA.save(),
      recipeEN.save()
    ]);
  }
}
