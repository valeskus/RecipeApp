import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsPositive()
    @IsNumber()
    readonly kCal: string;

    @IsPositive()
    @IsNumber()
    readonly proteins: string;

    @IsPositive()
    @IsNumber()
    readonly carbs: string;

    @IsPositive()
    @IsNumber()
    readonly fats: string;
}
