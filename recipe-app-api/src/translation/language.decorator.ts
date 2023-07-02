import { createParamDecorator, ExecutionContext, NotAcceptableException } from '@nestjs/common';

import { Languages } from './models';

export const Language = createParamDecorator(
  (data: unknown, context: ExecutionContext): Languages => {
    const request = context.switchToHttp().getRequest();

    const preferredLanguage = request.headers['accept-language'];

    if (!preferredLanguage) {
      return Languages.EN;
    }

    if (!Object.values(Languages).includes(preferredLanguage)) {
      throw new NotAcceptableException(`${preferredLanguage} is not acceptable language`);
    }

    return preferredLanguage;
  }
);
