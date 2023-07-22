import { CallHandler, ExecutionContext, Injectable, NestInterceptor, NotAcceptableException } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Languages } from './models';
import { TranslationService } from './translation.service';

@Injectable()
export class PreferredLanguageInterceptor implements NestInterceptor {
  constructor(
    private readonly translationService: TranslationService,
  ) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();

    const preferredLanguage = request.headers['accept-language'];

    if (!preferredLanguage || preferredLanguage === '*') {
      this.translationService.setCurrentLanguage(Languages.EN);

      return next.handle();
    }

    if (!Object.values(Languages).includes(preferredLanguage)) {
      throw new NotAcceptableException(`${preferredLanguage} is not acceptable language`);
    }

    this.translationService.setCurrentLanguage(preferredLanguage);

    return next.handle();
  }
}
