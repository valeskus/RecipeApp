import {Controller, Get} from '@nestjs/common';
import {CategoriesService} from './categories.service';
import {CategoryListModel} from './models';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getHello(): Promise<CategoryListModel> {
    return this.categoriesService.getCategories();
  }
}
