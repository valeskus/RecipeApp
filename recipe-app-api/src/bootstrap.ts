import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { MongoExceptionFilter } from './exception-filters/mongo.exception-filter';

export function bootstrap(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(new MongoExceptionFilter({ httpAdapter }));
}
