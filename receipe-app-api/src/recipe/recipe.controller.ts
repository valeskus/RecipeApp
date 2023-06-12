import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { RecipeService } from './recipe.service';
import { Recipe } from './schemas';
import { CreateRecipeDto } from './dto';

@ApiTags('Recipe')
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) { }

  @Get(':id')
  @ApiOperation({ summary: 'Get recipe by id' })
  @ApiOkResponse({
    description: "Returns a recipe by given id",
    type: Recipe
  })
  async findOneById(@Param('id') id: string): Promise<Recipe> {
    const product = await this.recipeService.findOneById(id);

    if (!product) {
      throw new NotFoundException('Recipe not found');
    }

    return product;
  }

  @Post()
  @ApiOperation({ summary: 'Create recipe' })
  @ApiOkResponse({
    description: "Creates a recipe by given fields",
    type: Recipe
  })
  async create(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    try {
      return await this.recipeService.create(createRecipeDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
