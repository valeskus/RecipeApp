import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { AdminApiGuard } from '../guards/admin-api.guard';
import { TranslationContext } from '../translation/translation-context.decorator';

import { CategoriesService } from './categories.service';
import { CreateCategoryDto, AllCategoriesDto, CategoryDto, UpdateImageDto } from './dto';

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
    type: AllCategoriesDto
  })
  async findAll(
    @TranslationContext() translationContext: TranslationContext
  ): Promise<AllCategoriesDto> {
    const categories = await this.categoriesService.findAll();

    return {
      categories: categories.map((category) => translationContext.getTranslated<CategoryDto>(category))
    };
  }

  @UseGuards(AdminApiGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get category by id' })
  @ApiOkResponse({
    description: 'Returns a category by given id',
    type: CategoryDto
  })
  async findOneById(
    @Param('id') id: string,
    @TranslationContext() translationContext: TranslationContext
  ): Promise<CategoryDto> {
    const category = await this.categoriesService.findOneById(id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return translationContext.getTranslated<CategoryDto>(category);
  }

  @UseGuards(AdminApiGuard)
  @Post()
  @ApiOperation({ summary: 'Create category' })
  @ApiOkResponse({
    description: 'Creates a category by given fields',
  })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const productUA = await this.categoriesService.findOneBy({
      'translations.ua.title': createCategoryDto.translations.ua.title
    });

    // TODO: Think the better solution for searching duplicates in translations
    if (productUA) {
      throw new BadRequestException(
        `Item 'translations.ua.title' with value '${createCategoryDto.translations.ua.title}' already exists`
      );
    }

    await this.categoriesService.create(createCategoryDto);
  }

  @UseGuards(AdminApiGuard)
  @Patch(':id/image')
  @ApiOperation({ summary: 'Update image' })
  @ApiOkResponse({
    description: 'Updates the category image to the given value'
  })
  async updateImage(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto): Promise<void> {
    try {
      await this.categoriesService.updateImage(id, updateImageDto);
    }
    catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
