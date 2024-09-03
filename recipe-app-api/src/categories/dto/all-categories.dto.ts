import { ApiProperty } from '@nestjs/swagger';

import { CategoryDto } from './category.dto';

class AllCategories {
    @ApiProperty({
        description: 'List of categories',
        required: true,
        type: [CategoryDto]
    })
    readonly categories: Array<CategoryDto>;
}

export { AllCategories as AllCategoriesDto };
