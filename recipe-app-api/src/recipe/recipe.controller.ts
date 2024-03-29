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
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AdminApiGuard } from '../guards/admin-api.guard';

import { RecipeService } from './recipe.service';
import { CreateRecipeDto, RecipeDto, UpdateImageDto, UpdateTagsDto } from './dto';

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
    try {
      await this.recipeService.create(createRecipeDto);
    } catch (error) {
      throw new BadRequestException(error.message, { cause: error });
    }
  }

  @UseGuards(AdminApiGuard)
  @Patch(':id/image')
  @ApiOperation({ summary: 'Update image' })
  @ApiOkResponse({
    description: 'Updates the recipe image to the given value'
  })
  async updateImage(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto): Promise<void> {
    try {
      await this.recipeService.updateImage(id, updateImageDto);
    }
    catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @UseGuards(AdminApiGuard)
  @Patch(':id/tags')
  @ApiOperation({ summary: 'Update tags' })
  @ApiOkResponse({
    description: 'Updates the recipe tags'
  })
  async updateTags(
    @Param('id') id: string,
    @Body() updateTagsDto: UpdateTagsDto): Promise<void> {
    try {
      await this.recipeService.updateTags(id, updateTagsDto);
    } catch (error) {
      throw new BadRequestException(error.message, { cause: error });
    }
  }
}
