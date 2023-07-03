import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { TranslationContext } from '../translation/translation-context.decorator';

import { CategoriesService } from './categories.service';
import { CreateCategoryDto, GetAllCategoriesDto, GetCategoryDto } from './dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
  ) { }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiOkResponse({
    description: 'Retrieves all categories',
    type: GetAllCategoriesDto
  })
  async findAll(
    @TranslationContext() translationContext: TranslationContext
  ): Promise<GetAllCategoriesDto> {
    const categories = await this.categoriesService.findAll();

    return {
      categories: categories.map((category) => translationContext.getTranslated<GetCategoryDto>(category))
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get category by id' })
  @ApiOkResponse({
    description: 'Returns a category by given id',
    type: GetCategoryDto
  })
  async findOneById(
    @Param('id') id: string,
    @TranslationContext() translationContext: TranslationContext
  ): Promise<GetCategoryDto> {
    const category = await this.categoriesService.findOneById(id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return translationContext.getTranslated<GetCategoryDto>(category);
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
