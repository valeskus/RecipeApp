// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `./env/.${process.env.APP_ENV}.env` });

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { bootstrap } from './bootstrap';

async function run() {
  const app = await NestFactory.create(AppModule);

  bootstrap(app);

  const config = new DocumentBuilder()
    .setTitle('Recipe app')
    .setDescription('The recipe API description')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

run();
