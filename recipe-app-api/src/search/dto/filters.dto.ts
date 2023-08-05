import { ApiProperty } from '@nestjs/swagger';

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

const filterOutEmpty = <T>(list: Facet<T>) => {
    return list.filter((item) => item.count);
};

const singleFilterTransformation = <T>(list: Facet<T>, appliedFilter?: T) => {
    return filterOutEmpty(list).map((item) => ({
            ...item,
            isActive: appliedFilter === item.value,
        }));
};

const multipleFilterTransformation = <T>(list: Facet<T>, appliedFilter?: Array<T>) => {
    return filterOutEmpty(list).map((item) => ({
            ...item,
            isActive: appliedFilter?.includes(item.value) || false
        }));
};

class Filters {
    constructor(params: FiltersData) {
        this.calories = singleFilterTransformation(params.calories, params.inputFilters.calories);
        this.totalTime = singleFilterTransformation(params.totalTime, params.inputFilters.totalTime);
        this.difficulty = singleFilterTransformation(params.difficulty, params.inputFilters.difficulty);

        this.mealType = multipleFilterTransformation(params.mealType, params.inputFilters.mealType);
        this.dietType = multipleFilterTransformation(params.dietType, params.inputFilters.dietType);
    }

    @ApiProperty({
        description: 'List of applicable filters by calories',
        type: [FilterDto],
        required: true
    })
    readonly calories: Array<FilterDto<Calories>>;

    @ApiProperty({
        description: 'List of applicable filters by cooking time',
        type: [FilterDto],
        required: true
    })
    readonly totalTime: Array<FilterDto<TotalTime>>;

    @ApiProperty({
        description: 'List of applicable filters by difficulty',
        type: [FilterDto],
        required: true
    })
    readonly difficulty: Array<FilterDto<Difficulty>>;

    @ApiProperty({
        description: 'List of applicable filters by meal type category',
        type: [FilterDto],
        required: true
    })
    readonly mealType: Array<FilterDto<string>>;

    @ApiProperty({
        description: 'List of applicable filters by diet type category',
        type: [FilterDto],
        required: true
    })
    readonly dietType: Array<FilterDto<string>>;
}

export { Filters as FiltersDto };
