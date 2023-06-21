import { Model } from 'mongoose';
import { Product } from './schemas';
import { CreateProductDto } from './dto';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    findAll(): Promise<Array<Product>>;
    findOneById(id: string): Promise<Product | null>;
    findOneByTitle(title: string): Promise<Product | null>;
    createGetterNutritionByAmount(amount: number): (nutritionPer100: number) => number;
    create(createProductDto: CreateProductDto): Promise<Product>;
}
