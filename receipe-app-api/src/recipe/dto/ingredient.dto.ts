import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

class Ingredient {
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

export { Ingredient as IngredientDto };
