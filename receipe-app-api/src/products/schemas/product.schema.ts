import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Product {
    @ApiProperty({
        example: 'Maine CoonWheat flour',
        description: 'Title of the product',
    })
    @Prop({ required: true })
    title: string;

    @ApiProperty({
        example: 364,
        description: 'Amount(g) of kilo calories (per 100g)',
    })
    @Prop({ required: true })
    kCal: number;

    @ApiProperty({
        example: 10.33,
        description: 'Amount(g) of proteins (per 100g)',
    })
    @Prop({ required: true })
    proteins: number;

    @ApiProperty({
        example: 76.31,
        description: 'Amount(g) of proteins (per 100g)',
    })
    @Prop({ required: true })
    carbs: number;

    @ApiProperty({
        example: 2.5,
        description: 'Amount(g) of fats (per 100g)',
    })
    @Prop({ required: true })
    fats: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    }
});
