import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AdminApiGuard } from '../guards/admin-api.guard';

import { RecipeService } from './recipe.service';
import { CreateRecipeDto, RecipeDto } from './dto';

@ApiTags('Recipe')
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) { }

  @Get(':id')
  @ApiOperation({ summary: 'Get recipe by id' })
  @ApiOkResponse({
    description: 'Returns a recipe by given id',
    type: RecipeDto
  })
  async findOneById(
    @Param('id') id: string,
  ): Promise<RecipeDto> {
    const recipe = await this.recipeService.findOneById(id);

    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }

    return {
      ...recipe,
      ingredients: recipe.ingredients.map((item) => ({
        ...item,
        amountPerServing: item.amount / recipe.servingsCount,
      }))
    };
  }

  @UseGuards(AdminApiGuard)
  @Post()
  @ApiOperation({ summary: 'Create recipe' })
  @ApiOkResponse({
    description: 'Creates a recipe by given fields',
  })
  async create(@Body() createRecipeDto: CreateRecipeDto): Promise<void> {
    await this.recipeService.create(createRecipeDto);
  }
}
