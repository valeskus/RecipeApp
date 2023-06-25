import { IsString, IsNotEmpty, IsUrl, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CategoryType } from '../models';

class CreateCategory {
    @ApiProperty({
        example: 'Lunch',
        description: 'Name of the category',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @ApiProperty({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the category',
        required: true
    })
    @IsUrl()
    readonly image: string;

    @ApiProperty({
        example: CategoryType.DIET,
        enum: CategoryType,
        description: 'Type of the category',
        required: true
    })
    @IsEnum(CategoryType)
    readonly type: CategoryType;
}

export { CreateCategory as CreateCategoryDto };
