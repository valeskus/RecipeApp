import { Controller, Get } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller()
export class RecipeController {
  constructor(private readonly appService: RecipeService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
