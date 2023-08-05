import { OmitType } from '@nestjs/swagger';

import { CategoryDataObject } from './category.data-object';

class Category extends OmitType(CategoryDataObject, ['translations']) {}

export { Category as CategoryDto };
