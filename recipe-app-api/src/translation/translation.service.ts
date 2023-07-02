import { Injectable } from '@nestjs/common';

import { Translatable, Translated, Languages, DEFAULT_LANGUAGE } from './models';

@Injectable()
export class TranslationService {
  getTranslated<R, T extends Translated<T> = Translated<R>>(
    translatable: Translatable<T> & R,
    language: Languages
  ): Translated<T> & R {

    if (language !== DEFAULT_LANGUAGE) {
      Object.assign(translatable, {
        // TODO: remove optional when all collections will contain translations
        ...translatable.translations?.[language] || {},
      });
    }

    Object.assign(translatable, {
      translations: undefined
    });

    return translatable;
  }
}
