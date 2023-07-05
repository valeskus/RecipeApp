import {  OmitType } from '@nestjs/swagger';

import { CategoryDataObject } from './category.data-object';

class CreateCategory extends OmitType(CategoryDataObject, ['id'] as const) {}

export { CreateCategory as CreateCategoryDto };
