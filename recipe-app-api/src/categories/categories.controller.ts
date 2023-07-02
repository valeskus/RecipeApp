import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CategoriesService } from './categories.service';
import { Category } from './schemas';
import { CreateCategoryDto, GetAllCategoriesDto } from './dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiOkResponse({
    description: 'Retrieves all categories',
    type: GetAllCategoriesDto
  })
  async findAll(): Promise<GetAllCategoriesDto> {
    const categories = await this.categoriesService.findAll();

    return {
      categories
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get category by id' })
  @ApiOkResponse({
    description: 'Returns a category by given id',
    type: Category
  })
  async findOneById(@Param('id') id: string): Promise<Category> {
    const category = await this.categoriesService.findOneById(id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  @Post()
  @ApiOperation({ summary: 'Create category' })
  @ApiOkResponse({
    description: 'Creates a category by given fields',
    type: Category
  })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return await this.categoriesService.create(createCategoryDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
