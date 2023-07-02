import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Ingredient {
    @ApiProperty({
        example: 'Meat',
        description: 'Name of the ingredient',
        required: true
    })
    @Prop({ required: true })
    title: string;

    @ApiProperty({
        example: 200,
        description: 'Amount of the ingredient according to product measurement units',
        required: true
    })
    @Prop({ required: true })
    amount: number;

    @ApiProperty({
        example: 'g',
        description: 'Measurement units',
    })
    @Prop({ required: true })
    units: string;
}
