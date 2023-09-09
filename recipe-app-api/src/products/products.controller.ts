import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { AdminApiGuard } from '../guards/admin-api.guard';
import { TranslationContext } from '../translation/translation-context.decorator';

import { ProductsService } from './products.service';
import { CreateProductDto, AllProductsDto, ProductDto } from './dto';

@UseGuards(AdminApiGuard)
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) { }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiOkResponse({
    description: 'Retrieves all products',
    type: AllProductsDto
  })
  async findAll(
    @TranslationContext() translationContext: TranslationContext
  ): Promise<AllProductsDto> {
    const products = await this.productsService.findAll();

    return {
      products: products.map((product) => translationContext.getTranslated<ProductDto>(product))
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiOkResponse({
    description: 'Returns a product by given id',
    type: ProductDto
  })
  async findOneById(
    @Param('id') id: string,
    @TranslationContext() translationContext: TranslationContext
  ): Promise<ProductDto> {
    const product = await this.productsService.findOneById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return translationContext.getTranslated<ProductDto>(product);
  }

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiOkResponse({
    description: 'Creates a product by given fields',
  })
  async create(@Body() createProductDto: CreateProductDto): Promise<void> {
    await this.productsService.create(createProductDto);
  }
}
