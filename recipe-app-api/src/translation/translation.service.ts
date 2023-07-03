import { Injectable } from '@nestjs/common';

import { Translatable, Translated, Languages, DEFAULT_LANGUAGE } from './models';

@Injectable()
export class TranslationService {
  private language = DEFAULT_LANGUAGE;

  setCurrentLanguage(nextLanguage: Languages) {
    this.language = nextLanguage;
  }

  getTranslated<R, T extends Translated<T> = Translated<R>>(
    translatable: Translatable<T> & R,
  ): Translated<T> & R {

    if (this.language !== DEFAULT_LANGUAGE) {
      Object.assign(translatable, {
        // TODO: remove optional when all collections will contain translations
        ...translatable.translations?.[this.language] || {},
      });
    }

    Object.assign(translatable, {
      translations: undefined
    });

    return translatable;
  }
}
