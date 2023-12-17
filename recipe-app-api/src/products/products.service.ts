import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { isMongoId } from 'class-validator';

import { TranslationService } from '../translation/translation.service';

import { Product } from './schemas';
import { CreateProductDto } from './dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }
  @Inject(TranslationService) private readonly translationService: TranslationService;

  findAll(): Promise<Array<Product>> {
    const query = this.productModel.find();

    return this.translationService.forCurrentLanguage({
      ua: () => query
        .collation({
          locale: 'uk'
        })
        .sort({
          'translations.ua.title': 1,
        }),
      en: () => query.sort({
        title: 1
      })
    });
  }

  findOneById(id: string): Promise<Product | null> {
    if (!isMongoId(id)) {
      return Promise.resolve(null);
    }

    return this.productModel.findOne({ _id: id }).exec();
  }

  findOneBy(query: FilterQuery<Product>): Promise<Product | null> {
    return this.productModel.findOne(query).exec();
  }

  createGetterNutritionByAmount(amount: number) {
    return (nutritionPer100: number) => {
      return Number(((nutritionPer100 / 100) * amount).toFixed(2));
    };
  }

  create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);

    return createdProduct.save();
  }
}
