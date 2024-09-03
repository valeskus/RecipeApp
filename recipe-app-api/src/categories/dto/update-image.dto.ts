import {
    IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class UpdateImage {
    @ApiProperty({
        example: 'https://picsum.photos/500/500',
        description: 'New image link ',
        required: true,
    })
    @IsUrl()
    readonly image: string;
}

export { UpdateImage as UpdateImageDto };
