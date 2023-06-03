import { Controller, Get, Param } from '@nestjs/common';

import { RecipeService } from './recipe.service';
import { DetailRecipeModel } from './models';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get(':id')
  get(@Param('id') id: string): Promise<DetailRecipeModel> {
    return this.recipeService.getRecipeById(id);
  }
}
