import { CategoriesService } from './categories.service';
import { Category } from './schemas';
import { CreateCategoryDto, GetAllCategoriesDto } from './dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<GetAllCategoriesDto>;
    findOneById(id: string): Promise<Category>;
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
}
