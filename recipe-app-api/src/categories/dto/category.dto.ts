import { OmitType } from '@nestjs/swagger';

import { CategoryDataObject } from './category.data-object';

class Category extends OmitType(CategoryDataObject, ['translations'] as const) {}

export { Category as CategoryDto };
