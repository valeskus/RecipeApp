import { Injectable, Param, PipeTransform } from '@nestjs/common';

import { TranslationService } from './translation.service';

export type TranslationContext = Pick<TranslationService, 'getTranslated'>;

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
