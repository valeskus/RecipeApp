import { CategoryType } from '../models';
declare class CreateCategory {
    readonly title: string;
    readonly image: string;
    readonly type: CategoryType;
}
export { CreateCategory as CreateCategoryDto };
