import { CategoriesService } from './categories.service';
import { CategoryListModel } from './models';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getHello(): Promise<CategoryListModel>;
}
