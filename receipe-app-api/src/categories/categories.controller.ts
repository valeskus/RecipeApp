import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { Category } from './schemas';
import { CreateCategoryDto } from './dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Get()
  async findAll(): Promise<{ categories: Array<Category> }> {
    const categories = await this.categoriesService.findAll();

    return {
      categories
    };
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Category> {
    const category = await this.categoriesService.findOneById(id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return await this.categoriesService.create(createCategoryDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
