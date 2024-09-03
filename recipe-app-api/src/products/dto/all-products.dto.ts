import { ApiProperty } from '@nestjs/swagger';

import { ProductDto } from './product.dto';

class AllProducts {
    @ApiProperty({
        description: 'List of products',
        required: true,
        type: [ProductDto]
    })
    readonly products: Array<ProductDto>;
}

export { AllProducts as AllProductsDto };
