import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { isMongoId } from 'class-validator';

import { Category } from './schemas';
import { CreateCategoryDto, UpdateImageDto } from './dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) { }

  findAll(): Promise<Array<Category>> {
    return this.categoryModel.find().sort({ sortIndex: 1 });
  }

  findOneById(id: string): Promise<Category | null> {
    if (!isMongoId(id)) {
      return Promise.resolve(null);
    }

    return this.categoryModel.findOne({ _id: id }).exec();
  }

  findOneBy(query: FilterQuery<Category>): Promise<Category | null> {
    return this.categoryModel.findOne(query).exec();
  }

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryDto);

    return createdCategory.save();
  }

  async updateImage(id: string, updateImageDto: UpdateImageDto): Promise<void> {
    if (!isMongoId(id)) {
      throw new Error('Entered id was wrong!');
    }

    const category = await this.categoryModel.findOne({ _id: id }).exec();

    if (!category) {
      throw new Error(`Category by id:${id} not found!`);
    }

    category.updateOne({ image: updateImageDto.image }).exec();

    await category?.save();
  }
}
