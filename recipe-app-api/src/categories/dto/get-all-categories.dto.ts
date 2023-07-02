import { ApiProperty } from '@nestjs/swagger';

import { Category } from '../schemas';

class GetAllCategories {
    @ApiProperty({
        description: 'List of categories',
        required: true,
        type: [Category]
    })
    readonly categories: Array<Category>;
}

export { GetAllCategories as GetAllCategoriesDto };
