import { Module } from '@nestjs/common';

import { SMTPController } from './smtp.controller';
import { SMTPService } from './smtp.service';

@Module({
  imports: [],
  controllers: [SMTPController],
  providers: [SMTPService],
  exports: []
})
export class SMTPModule { }
