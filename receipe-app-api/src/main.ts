// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `./env/.${process.env.APP_ENV}.env` });

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();
