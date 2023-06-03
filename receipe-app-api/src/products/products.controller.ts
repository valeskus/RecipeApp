import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';

import { ProductsService } from './products.service';
import { Product } from './schemas';
import { CreateProductDto } from './dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<{products: Array<Product>}> {
    const products = await this.productsService.findAll();

    return {
      products
    };
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Product> {
    const product = await this.productsService.findOneById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productsService.create(createProductDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
