import * as path from 'path';

import { Global, Module } from '@nestjs/common';
import { I18nModule, AcceptLanguageResolver } from 'nestjs-i18n';

import { TranslationService } from './translation.service';

@Global()
@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/localI18n/'),
        watch: true,
      },
      resolvers: [
        AcceptLanguageResolver
      ],
    }),
  ],
  providers: [TranslationService],
  exports: [TranslationService]
})
export class TranslationModule { }
