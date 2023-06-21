import { Model } from 'mongoose';
import { Category } from './schemas';
import { CreateCategoryDto } from './dto';
export declare class CategoriesService {
    private categoryModel;
    constructor(categoryModel: Model<Category>);
    findAll(): Promise<Array<Category>>;
    findOneById(id: string): Promise<Category | null>;
    findOneByTitle(title: string): Promise<Category | null>;
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
}
