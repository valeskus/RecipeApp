import { Injectable, Param, PipeTransform } from '@nestjs/common';

import { Translatable, Translated } from './models';
import { TranslationService } from './translation.service';

export interface TranslationContext {
  getTranslated<R, T extends Translated<T> = Translated<R>>(
    translatable: Translatable<T> & R,
  ): Translated<T> & R;
}

@Injectable()
class TranslationContextPipe implements PipeTransform {
  constructor(
    private readonly translationService: TranslationService,
  ) { }

  transform(): TranslationContext {
    return {
      getTranslated: (translatable) => {
        return this.translationService.getTranslated(translatable);
      }
    };
  }
}

export const TranslationContext = () => Param(TranslationContextPipe);
