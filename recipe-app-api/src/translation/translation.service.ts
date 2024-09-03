import { Injectable } from '@nestjs/common';
import { Document } from 'mongoose';
import { I18nContext, I18nService } from 'nestjs-i18n';

import { Translatable, Translated, Languages, DEFAULT_LANGUAGE } from './models';

@Injectable()
export class TranslationService {
  constructor(private readonly i18n: I18nService) { }

  getCurrentLanguage() {
    const headersLanguage = I18nContext.current()?.lang || DEFAULT_LANGUAGE;

    if (this.i18n.getSupportedLanguages().includes(headersLanguage)) {
      return headersLanguage;
    }

    return DEFAULT_LANGUAGE;
  }

  isDefault(withLanguage?: Languages) {
    if (withLanguage) {
      return withLanguage === DEFAULT_LANGUAGE;
    }

    return this.getCurrentLanguage() === DEFAULT_LANGUAGE;
  }

  forCurrentLanguage<T>(items: Record<Languages, () => T>): T {
    return items[this.getCurrentLanguage()]();
  }

  getTranslated = <R, T extends Translated<T> = Translated<R>>(
    translatable: Translatable<T> & R,
    withLanguage?: Languages
  ): Translated<T> & Omit<R, 'translations'> => {
    const translatableConverted = translatable instanceof Document
      ? translatable.toJSON() as Partial<Translatable<T>> & R
      : { ...translatable };

    if (!this.isDefault(withLanguage)) {
      Object.assign(translatableConverted, {
        ...translatableConverted.translations?.[withLanguage || this.getCurrentLanguage()] || {},
      });
    }

    delete translatableConverted.translations;

    return translatableConverted;
  };

  t = (selector: string): string => {
    return this.i18n.t(selector, {
      lang: this.getCurrentLanguage()
    });
  };
}
