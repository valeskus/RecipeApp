import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { isMongoId } from 'class-validator';

import { ProductsService } from '../products/products.service';
import { CategoriesService } from '../categories/categories.service';

import { Recipe, ShortCategory } from './schemas';
import { CreateRecipeDto } from './dto';

@Injectable()
export class RecipeService {
  @InjectModel(Recipe.name) private recipeModel: Model<Recipe>;
  @Inject(CategoriesService) private readonly categoriesService: CategoriesService;
  @Inject(ProductsService) private readonly productsService: ProductsService;

  findOneByTitle(title: string): Promise<Recipe | null> {
    return this.recipeModel.findOne({ title }).exec();
  }

  findOneById(id: string): Promise<Recipe | null> {
    if (!isMongoId(id)) {
      return Promise.resolve(null);
    }

    return this.recipeModel.findOne({ _id: id }).exec();
  }

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const found = await this.findOneByTitle(createRecipeDto.title);

    if (found) {
      throw new Error(`Recipe ${createRecipeDto.title} already exists`);
    }

    const categories: Array<ShortCategory> = [];
    for (const categoryTitle of createRecipeDto.categories) {
      const category = await this.categoriesService.findOneByTitle(categoryTitle);

      if (!category) {
        throw new Error(`Category ${categoryTitle} does not exist`);
      }

      categories.push({
        title: category.title,
        type: category.type
      });
    }

    let kCal = 0;
    let fats = 0;
    let carbs = 0;
    let proteins = 0;
    for (const ingredient of createRecipeDto.ingredients) {
      const product = await this.productsService.findOneByTitle(ingredient.title);

      if (!product) {
        throw new Error(`Product ${ingredient.title} does not exist`);
      }

      const getNutritionFor = this.productsService.createGetterNutritionByAmount(ingredient.amount);

      kCal += getNutritionFor(product.kCal);
      fats += getNutritionFor(product.fats);
      carbs += getNutritionFor(product.carbs);
      proteins += getNutritionFor(product.proteins);

      Object.assign(ingredient, {
        units: product.units,
      });
    }

    const createdRecipe = new this.recipeModel({
      ...createRecipeDto,
      kCal,
      categories,
      macroNutrients: {
        fats,
        carbs,
        proteins
      }
    });

    return createdRecipe.save();
  }
}
