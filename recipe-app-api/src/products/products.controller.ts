import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { ProductsService } from './products.service';
import { Product } from './schemas';
import { CreateProductDto, GetAllProductsDto } from './dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiOkResponse({
    description: 'Retrieves all products',
    type: GetAllProductsDto
  })
  async findAll(): Promise<GetAllProductsDto> {
    const products = await this.productsService.findAll();

    return {
      products
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiOkResponse({
    description: 'Returns a product by given id',
    type: Product
  })
  async findOneById(@Param('id') id: string): Promise<Product> {
    const product = await this.productsService.findOneById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiOkResponse({
    description: 'Creates a product by given fields',
    type: Product
  })
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    try {
      return await this.productsService.create(createProductDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
