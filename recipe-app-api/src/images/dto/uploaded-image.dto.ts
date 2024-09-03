import { ApiProperty } from '@nestjs/swagger';

export class UploadedImage {
    @ApiProperty({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image',
        required: true
    })
    readonly url: string;
}

export { UploadedImage as UploadedImageDto };
