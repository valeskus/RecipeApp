import { OmitType } from '@nestjs/swagger';

import { ProductDataObject } from './product.data-object';

class CreateProduct extends OmitType(ProductDataObject, ['id']) {}

export { CreateProduct as CreateProductDto };
