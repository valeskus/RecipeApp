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
import { CreateRecipeDto } from './dto';

@Injectable()
export class RecipeService {
  @InjectModel(RecipeUA.name) private recipeModelUA: Model<Recipe>;
  @InjectModel(RecipeEN.name) private recipeModelEN: Model<Recipe>;
  @Inject(CategoriesService) private readonly categoriesService: CategoriesService;
  @Inject(ProductsService) private readonly productsService: ProductsService;
  @Inject(TranslationService) private readonly translationService: TranslationService;

  findOneByTitle(title: string): Promise<Recipe | null> {
    return this.translationService.forCurrentLanguage({
      ua: () => this.recipeModelUA.findOne({ title }).exec(),
      en: () => this.recipeModelEN.findOne({ title }).exec(),
    });
  }

  findOneById(id: string): Promise<Recipe | null> {
    if (!isMongoId(id)) {
      return Promise.resolve(null);
    }

    return this.translationService.forCurrentLanguage({
      ua: () => this.recipeModelUA.findOne({ _id: id }).exec(),
      en: () => this.recipeModelEN.findOne({ _id: id }).exec(),
    });
  }

  async create(createRecipeDto: CreateRecipeDto): Promise<void> {
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
