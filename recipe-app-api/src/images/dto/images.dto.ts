import { ApiProperty } from '@nestjs/swagger';

import { UploadedImage } from './uploaded-image.dto';

export class Images {
    @ApiProperty({
        description: 'List of images',
        required: true,
        type: [UploadedImage]
    })
    readonly images: Array<UploadedImage>;
}

export { Images as ImagesDto };
