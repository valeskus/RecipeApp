import { IsUrl, IsEnum, IsDefined, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { Translatable } from '../../translation/models';
import { CategoryType } from '../models';

import { CategoryTranslations, TranslatedCategory } from './translations';

class CreateCategory extends TranslatedCategory implements Translatable<TranslatedCategory> {
    @ApiProperty({
        description: 'Object with translations',
        required: true
    })
    @ValidateNested()
    @Type(() => CategoryTranslations)
    @IsDefined()
    readonly translations: CategoryTranslations;

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
