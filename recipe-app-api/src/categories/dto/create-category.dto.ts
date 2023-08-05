import {  OmitType } from '@nestjs/swagger';

import { CategoryDataObject } from './category.data-object';

class CreateCategory extends OmitType(CategoryDataObject, ['id']) {}

export { CreateCategory as CreateCategoryDto };
