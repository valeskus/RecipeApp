import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MongooseConfigService } from './mongo-config.service';

@Module({
  imports: [MongooseModule.forRootAsync({
    useClass: MongooseConfigService,
  })],
  controllers: [],
  providers: [],
  exports: []
})
export class MongoModule { }
