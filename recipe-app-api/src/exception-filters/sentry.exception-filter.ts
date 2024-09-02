import { ArgumentsHost, Catch, HttpException  } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import * as Sentry from '@sentry/nestjs';

@Catch()
export class SentryExceptionFilter extends BaseExceptionFilter {
  override catch(exception: HttpException, host: ArgumentsHost) {
    Sentry.captureException(exception);

    super.catch(exception, host);
  }
}
