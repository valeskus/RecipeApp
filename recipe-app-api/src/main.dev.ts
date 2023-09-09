// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `./env/.${process.env.APP_ENV}.env` });

import * as path from 'path';
import { writeFileSync } from 'fs';

import * as yaml from 'yaml';
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

  const outputPath = path.resolve(process.cwd(), 'swagger/swagger.json');
  writeFileSync(outputPath, JSON.stringify(document), { encoding: 'utf8',  });

  const yamlString = yaml.stringify(document, {});
  const outputPath2 = path.resolve(process.cwd(), 'swagger/swagger.yaml');

  writeFileSync(outputPath2, yamlString);

  await app.listen(3000);
}

run();
