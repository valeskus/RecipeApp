import { ApiProperty } from '@nestjs/swagger';

import { GetCategoryDto } from './get-category.dto';

class GetAllCategories {
    @ApiProperty({
        description: 'List of categories',
        required: true,
        type: [GetCategoryDto]
    })
    readonly categories: Array<GetCategoryDto>;
}

export { GetAllCategories as GetAllCategoriesDto };
