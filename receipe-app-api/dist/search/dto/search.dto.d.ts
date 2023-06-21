import { Calories, Difficulty, SortOptions, TotalTime } from '../models';
declare class Search {
    readonly search: string;
    readonly sort: SortOptions;
    readonly difficulty?: Difficulty;
    readonly totalTime?: TotalTime;
    readonly calories?: Calories;
    readonly mealType?: Array<string>;
    readonly dietType?: Array<string>;
    readonly offset: number;
    readonly pageSize: number;
}
export { Search as SearchDto };
