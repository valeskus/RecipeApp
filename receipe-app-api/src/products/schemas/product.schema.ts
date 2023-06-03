import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    kCal: number;

    @Prop({ required: true })
    proteins: number;

    @Prop({ required: true })
    carbs: number;

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
