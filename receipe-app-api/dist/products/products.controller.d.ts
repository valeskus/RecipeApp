import { ProductsService } from './products.service';
import { Product } from './schemas';
import { CreateProductDto, GetAllProductsDto } from './dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<GetAllProductsDto>;
    findOneById(id: string): Promise<Product>;
    create(createProductDto: CreateProductDto): Promise<Product>;
}
