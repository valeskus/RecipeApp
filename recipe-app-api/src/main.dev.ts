// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `./env/.${process.env.APP_ENV}.env` });

import * as path from 'path';
import { readFileSync, writeFileSync } from 'fs';

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { bootstrap } from './bootstrap';
import { AcceptLanguageHeaderParameter } from './translation/accept-language-header-swagger.parameter';

async function run() {
  const app = await NestFactory.create(AppModule);

  bootstrap(app);

  const config = new DocumentBuilder()
    .setTitle('Recipe app')
    .setDescription('The recipe API description')
    .addGlobalParameters({
      ...AcceptLanguageHeaderParameter
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const htmlFile = path.resolve(process.cwd(), 'swagger/index.html');
  const contentRaw = readFileSync(htmlFile);

  const content = contentRaw.toString().replace(/var spec = {.*}/g, 'var spec = ' + JSON.stringify(document));
  writeFileSync(htmlFile, content, { encoding: 'utf8' });

  await app.listen(3000);
}

run();
