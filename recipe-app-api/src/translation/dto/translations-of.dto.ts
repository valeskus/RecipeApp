import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, ValidateNested } from 'class-validator';
import { Type as ClassType } from '@nestjs/common';

import { Languages, Translatable, Translations } from '../models';

export function TranslationsDtoOf<T extends ClassType, R = InstanceType<T>>(TranslatableItem: T) {
  class ItemTranslations implements Translations<R> {
    @ApiProperty({
      description: 'Particular translations',
      required: true
    })
    @ValidateNested()
    @Type(() => TranslatableItem)
    @IsDefined()
    readonly [Languages.UA]: R;
  }

  class TranslationsContainer extends TranslatableItem implements Translatable<R> {
    @ApiProperty({
      description: 'Object with translations',
      required: true
    })
    @ValidateNested()
    @Type(() => ItemTranslations)
    @IsDefined()
    readonly translations: ItemTranslations;
  }

  return TranslationsContainer;
}
