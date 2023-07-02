import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Languages } from '../translation/models';
import { TranslationService } from '../translation/translation.service';
import { Language } from '../translation/language.decorator';

import { CategoriesService } from './categories.service';
import { CreateCategoryDto, GetAllCategoriesDto } from './dto';
import { GetCategoryDto } from './dto/get-category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly translationService: TranslationService,
  ) { }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiOkResponse({
    description: 'Retrieves all categories',
    type: GetAllCategoriesDto
  })
  async findAll(@Language() language: Languages): Promise<GetAllCategoriesDto> {
    const categories = await this.categoriesService.findAll();

    return {
      categories: categories.map((category) => this.translationService.getTranslated(category, language))
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get category by id' })
  @ApiOkResponse({
    description: 'Returns a category by given id',
    type: GetCategoryDto
  })
  async findOneById(@Param('id') id: string, @Language() language: Languages): Promise<GetCategoryDto> {
    const category = await this.categoriesService.findOneById(id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return this.translationService.getTranslated<GetCategoryDto>(category, language);
  }

  @Post()
  @ApiOperation({ summary: 'Create category' })
  @ApiOkResponse({
    description: 'Creates a category by given fields',
  })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
      await this.categoriesService.create(createCategoryDto);
  }
}
