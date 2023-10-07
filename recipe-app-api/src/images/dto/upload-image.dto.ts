import { ApiProperty } from '@nestjs/swagger';

export class UploadImage {
    @ApiProperty({
        description: 'Image file',
        required: true,
        type: 'string',
        format: 'binary'
    })
    readonly image: Express.Multer.File;
}

export { UploadImage as UploadImageDto };
