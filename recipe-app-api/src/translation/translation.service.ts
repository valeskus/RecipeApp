import { Injectable } from '@nestjs/common';
import { Document } from 'mongoose';

import { Translatable, Translated, Languages, DEFAULT_LANGUAGE } from './models';

@Injectable()
export class TranslationService {
  private language = DEFAULT_LANGUAGE;

  setCurrentLanguage(nextLanguage: Languages) {
    this.language = nextLanguage;
  }

  getCurrentLanguage() {
    return this.language;
  }

  isDefault() {
    return this.language === DEFAULT_LANGUAGE;
  }

  forCurrentLanguage<T>(items: Record<Languages, () => T>) {
    return items[this.language]();
  }

  withLanguage = (language: Languages) => {
    const prevLanguage = this.language;

    this.setCurrentLanguage(language);

    return async <T>(operation: () => Promise<T> | T) => {
      const result = await operation();

      this.setCurrentLanguage(prevLanguage);

      return result;
    };
  };

  getTranslated = <R, T extends Translated<T> = Translated<R>>(
    translatable: Translatable<T> & R,
  ): Translated<T> & Omit<R, 'translations'> => {

    const translatableConverted = translatable instanceof Document
      ? translatable.toJSON() as Partial<Translatable<T>> & R
      : { ...translatable };

    if (!this.isDefault()) {

      Object.assign(translatableConverted, {
        // TODO: remove optional when all collections will contain translations
        ...translatableConverted.translations?.[this.language] || {},
      });
    }

    delete translatableConverted.translations;

    return translatableConverted;
  };
}
