import {
    BadRequestException,
    Body,
    Controller,
    Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { SMTPService } from './smtp.service';
import { ContactFormDto } from './dto';

@ApiTags('SMTP')
@Controller('smtp')
export class SMTPController {
    constructor(private readonly smtpService: SMTPService) { }

    @Post('/request-support')
    @ApiOperation({ summary: 'Send support request' })
    @ApiOkResponse({
        description: 'Support request has been sent',
    })
    async requestSupport(@Body() contactForm: ContactFormDto): Promise<void> {
        try {
            await this.smtpService.sendContactRequestEmail(contactForm);
        } catch (error) {
            throw new BadRequestException(error.message, { cause: error });
        }
    }
}
