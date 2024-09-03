import { OmitType } from '@nestjs/swagger';

import { ProductDataObject } from './product.data-object';

class Product extends OmitType(ProductDataObject, ['translations']) {}

export { Product as ProductDto };
