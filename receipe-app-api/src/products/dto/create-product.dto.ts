import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateProduct {
    @ApiProperty({
        example: 'Maine CoonWheat flour',
        description: 'Title of the product',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @ApiProperty({
        example: 364,
        description: 'Amount(g) of kilo calories (per 100g)',
        required: true
    })
    @IsPositive()
    @IsNumber()
    readonly kCal: number;

    @ApiProperty({
        example: 10.33,
        description: 'Amount(g) of proteins (per 100g)',
        required: true
    })
    @IsPositive()
    @IsNumber()
    readonly proteins: number;

    @ApiProperty({
        example: 76.31,
        description: 'Amount(g) of proteins (per 100g)',
        required: true
    })
    @IsPositive()
    @IsNumber()
    readonly carbs: number;

    @ApiProperty({
        example: 2.5,
        description: 'Amount(g) of fats (per 100g)',
        required: true
    })
    @IsPositive()
    @IsNumber()
    readonly fats: number;
}

export { CreateProduct as CreateProductDto };
