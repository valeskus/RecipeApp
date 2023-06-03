import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { isMongoId } from 'class-validator';

import { Product } from './schemas';
import { CreateProductDto } from './dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

  findAll(): Promise<Array<Product>> {
    return this.productModel.find().exec();
  }

  findOneById(id: string): Promise<Product | null> {
    if (!isMongoId(id)) {
      return Promise.resolve(null);
    }

    return this.productModel.findOne({ _id: id }).exec();
  }

  findOneByTitle(title: string): Promise<Product | null> {
    return this.productModel.findOne({ title }).exec();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const found = await this.findOneByTitle(createProductDto.title);

    if (found) {
      throw new Error(`Product ${createProductDto.title} already exists`);
    }

    const createdProduct = new this.productModel(createProductDto);

    return createdProduct.save();
  }
}
