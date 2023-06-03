require('dotenv').config({ path: `./env/.${process.env.APP_ENV}.env` });

import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
