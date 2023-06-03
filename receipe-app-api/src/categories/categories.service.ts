import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { isMongoId } from 'class-validator';

import { Category } from './schemas';
import { CreateCategoryDto } from './dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) { }

  async findAll(): Promise<Array<Category>> {
    return this.categoryModel.find().exec();
  }

  async findOneById(id: string): Promise<Category | null> {
    if (!isMongoId(id)) {
      return null;
    }

    return this.categoryModel.findOne({ _id: id }).exec()
  }

  async findOneByTitle(title: string): Promise<Category | null> {
    return this.categoryModel.findOne({ title }).exec()
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const found = await this.findOneByTitle(createCategoryDto.title);

    if (found) {
      throw new Error(`Category ${createCategoryDto.title} already exists`);
    }

    const createdCategory = new this.categoryModel(createCategoryDto);

    return createdCategory.save();
  }
}
