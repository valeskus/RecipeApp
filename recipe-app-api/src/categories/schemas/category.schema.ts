import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { TranslationsSchemaOf } from '../../translation/schemas';
import { CategoryType } from '../models';

Schema({
  _id: false,
});
class TranslatableCategoryItems extends Document {
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
export class Category extends TranslationsSchemaOf(TranslatableCategoryItems) {
  override readonly id: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  type: CategoryType;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
