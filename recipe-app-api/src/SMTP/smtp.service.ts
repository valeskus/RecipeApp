import { Injectable } from '@nestjs/common';
import * as NodeMailer from 'nodemailer';

import { ContactFormDto } from './dto';

@Injectable()
export class SMTPService {
    async sendContactRequestEmail(contactForm: ContactFormDto): Promise<void> {
        const transporter = NodeMailer.createTransport({
            host: process.env.SMTP_SERVER,
            port: Number(process.env.SMTP_PORT),
            secure: Boolean(Number(process.env.SMTP_SECURE)),
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: 'no-reply@support-request.com',
            to: process.env.SMTP_RECEIVERS,
            subject: 'Request for support',
            text: `From: ${contactForm.authorEmail}\nMessage: ${contactForm.message}`
        });
    }
}
