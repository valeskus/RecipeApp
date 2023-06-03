import { ApiProperty } from '@nestjs/swagger';

import { Product } from '../schemas';

class GetAllProducts {
    @ApiProperty({
        description: 'List of products',
        required: true,
        type: [Product]
    })
    readonly products: Array<Product>;
}

export { GetAllProducts as GetAllProductsDto };
