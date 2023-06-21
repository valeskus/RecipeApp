declare class RecipeListItem {
    constructor(params?: RecipeListItem);
    readonly id: string;
    readonly time: number;
    readonly title: string;
    readonly image: string;
    readonly kCal: number;
}
export { RecipeListItem as RecipeListItemDto };
