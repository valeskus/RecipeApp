import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { TranslationsSchemaOf } from '../../translation/schemas';
import { Units } from '../models';

Schema({
    _id: false,
});
class TranslatableProductItems {
    @Prop({ required: true, unique: true })
    title: string;
}

@Schema({
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (doc, ret) => {
            delete ret._id;
        }
    }
})
export class Product extends TranslationsSchemaOf(TranslatableProductItems)  {
    readonly id: string;

    @Prop({ required: true })
    kCal: number;

    @Prop({ required: true })
    proteins: number;

    @Prop({ required: true })
    carbs: number;

    @Prop({ required: true })
    fats: number;

    @Prop({ required: true })
    units: Units;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
