import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { TranslationsSchemaOf } from '../../translation/schemas';
import { CategoryType } from '../models';

Schema({
  _id: false,
});
class TranslatableCategoryItems {
  @Prop({ required: true, unique: true, index: 1 })
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
  readonly id: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  type: CategoryType;

  @Prop({ required: true })
  sortIndex: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
