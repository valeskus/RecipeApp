import { Type as ClassType } from '@nestjs/common';
import { Prop, Schema } from '@nestjs/mongoose';

import { Languages, Translatable, Translations } from '../models';

export function TranslationsSchemaOf<T extends ClassType<Document>, R = InstanceType<T>>(TranslatableItem: T) {
  @Schema({
    _id: false,
  })
  class ItemTranslations implements Translations<R> {
    @Prop({
      required: true,
      type: TranslatableItem
    })
    [Languages.UA]: R;
  }

  class TranslationsContainer extends TranslatableItem implements Translatable<R> {
    @Prop({
      required: true,
      type: ItemTranslations
    })
    translations: ItemTranslations;
  }

  return TranslationsContainer;
}
