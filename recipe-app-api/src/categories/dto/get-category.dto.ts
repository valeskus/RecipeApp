import { ApiProperty, OmitType } from '@nestjs/swagger';

import { CreateCategoryDto } from './create-category.dto';

class GetCategory extends OmitType(CreateCategoryDto, ['translations'] as const) {
    @ApiProperty({
        example: '6485e97f2fe21ff4fba5f7e4',
        description: 'Id of the category',
        required: true
    })
    readonly id: string;
}

export { GetCategory as GetCategoryDto };
