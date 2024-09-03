import { ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsDivisibleBy,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUrl,
    Min
} from 'class-validator';

import { TranslationsDtoOf } from '../../translation/dto';
import { CategoryType } from '../models';

class TranslatableCategoryItems {
    @ApiProperty({
        example: 'Lunch',
        description: 'Name of the category',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly title: string;
}

export class CategoryDataObject extends TranslationsDtoOf(TranslatableCategoryItems) {
    @ApiProperty({
        example: '6485e97f2fe21ff4fba5f7e4',
        description: 'Id of the category',
        required: true
    })
    readonly id: string;

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

    @ApiProperty({
        example: 0,
        description: 'The sort index of the category',
        required: true
    })
    @IsDivisibleBy(1)
    @Min(0)
    @IsNumber()
    @IsDefined()
    readonly sortIndex: number;
}
