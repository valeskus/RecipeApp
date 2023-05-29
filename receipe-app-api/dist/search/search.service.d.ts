import { RecipeListModel } from './models';
export declare class SearchService {
    findBySearch(searchTerm: string): Promise<RecipeListModel>;
}
