import { Calories, Difficulty, Facet, TotalTime } from '../models';
import { FilterDto } from './filter.dto';
import { SearchDto } from './search.dto';
interface FiltersData {
    calories: Facet<Calories>;
    totalTime: Facet<TotalTime>;
    difficulty: Facet<Difficulty>;
    mealType: Facet<string>;
    dietType: Facet<string>;
    inputFilters: SearchDto;
}
declare class Filters {
    constructor(params: FiltersData);
    readonly calories: Array<FilterDto<Calories>>;
    readonly totalTime: Array<FilterDto<TotalTime>>;
    readonly difficulty: Array<FilterDto<Difficulty>>;
    readonly mealType: Array<FilterDto<string>>;
    readonly dietType: Array<FilterDto<string>>;
}
export { Filters as FiltersDto };
