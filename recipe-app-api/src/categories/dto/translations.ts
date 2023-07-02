import { IsString, IsNotEmpty, IsDefined, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { Languages, Translations } from '../../translation/models';

export class TranslatedCategory {
    @ApiProperty({
        example: 'Lunch',
        description: 'Name of the category',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly title: string;
}

export class CategoryTranslations implements Translations<TranslatedCategory> {
    @ApiProperty({
        description: 'Particular translations',
        required: true
    })
    @ValidateNested()
    @Type(() => TranslatedCategory)
    @IsDefined()
    readonly [Languages.UA]: TranslatedCategory;
}
