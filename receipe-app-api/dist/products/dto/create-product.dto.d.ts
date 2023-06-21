declare class CreateProduct {
    readonly title: string;
    readonly kCal: number;
    readonly proteins: number;
    readonly carbs: number;
    readonly fats: number;
    readonly units: 'ml' | 'g';
}
export { CreateProduct as CreateProductDto };
