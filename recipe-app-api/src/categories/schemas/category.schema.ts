import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Translatable } from '../../translation/models';
import { CategoryType } from '../models';

import { CategoryTranslations, TranslatedCategory } from './translations';

@Schema({
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (doc, ret) => {
            delete ret._id;
        }
    }
})
export class Category extends TranslatedCategory implements Translatable<TranslatedCategory> {
    readonly id: string;

    @Prop({
        required: true,
        type: CategoryTranslations
     })
    translations: CategoryTranslations;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    type: CategoryType;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
