import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

class ContactForm {
    @ApiProperty({
        example: 'There is an issue',
        description: 'Message',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly message: string;

    @ApiProperty({
        example: 'email@email.com',
        description: 'Email for author',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly authorEmail: string;
}

export { ContactForm as ContactFormDto };
