import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { bootstrap } from './bootstrap';

async function run() {
  const app = await NestFactory.create(AppModule);

  bootstrap(app);

  app.enableCors();

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}

run();
