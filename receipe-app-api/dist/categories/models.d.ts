export interface CategoryModel {
    id: string;
    title: string;
    image: string;
}
export interface CategoryListModel {
    categories: Array<CategoryModel>;
}
