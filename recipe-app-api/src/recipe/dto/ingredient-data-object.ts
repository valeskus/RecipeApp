import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class IngredientDataObject {
    @ApiProperty({
        example: '6485e97f2fe21ff4fba5f7e4',
        description: 'Id of the product',
        required: true
    })
    @IsMongoId({
        message: ({ value }) => `Invalid product id ${value}`
    })
    @IsNotEmpty()
    @IsString()
    readonly id: string;

    @ApiProperty({
        example: 'Meat',
        description: 'Name of the ingredient',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @ApiProperty({
        example: 200,
        description: 'Amount of the ingredient according to product measurement units',
        required: true
    })
    @IsPositive()
    @IsNumber()
    readonly amount: number;
}
