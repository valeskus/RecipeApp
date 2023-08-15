import { ApiProperty } from '@nestjs/swagger';

import { Calories, Difficulty, Facet, TotalTime } from '../models';

import { FilterValueDto } from './filterValue.dto';
import { SearchDto } from './search.dto';
import { FilterDto } from './filter.dto';

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
            title: String(item.value),
        }));
};

const multipleFilterTransformation = <T>(list: Facet<T>, appliedFilter?: Array<T>) => {
    return filterOutEmpty(list).map((item) => ({
            ...item,
            title: item.value,
            isActive: appliedFilter?.includes(item.value) || false
        }));
};

class Filters {
    constructor(params: FiltersData) {
        this.calories = {
            title: 'calories',
            items: singleFilterTransformation(params.calories, params.inputFilters.calories),
            multiple: false,
        };
        this.totalTime = {
            title: 'total time',
            items: singleFilterTransformation(params.totalTime, params.inputFilters.totalTime),
            multiple: false,
        };
        this.difficulty = {
            title: 'difficulty',
            items: singleFilterTransformation(params.difficulty, params.inputFilters.difficulty),
            multiple: false,
        };
        this.mealType = {
            title: 'meal type',
            items: multipleFilterTransformation(params.mealType, params.inputFilters.mealType),
            multiple: true,
        };
        this.dietType = {
            title: 'diet type',
            items: multipleFilterTransformation(params.dietType, params.inputFilters.dietType),
            multiple: true,
        };
    }

    @ApiProperty({
        description: 'List of applicable filters by calories',
        type: FilterDto,
        required: true
    })
    readonly calories: FilterDto<Calories>;

    @ApiProperty({
        description: 'List of applicable filters by cooking time',
        type: FilterDto,
        required: true
    })
    readonly totalTime: FilterDto<TotalTime>;

    @ApiProperty({
        description: 'List of applicable filters by difficulty',
        type: FilterDto,
        required: true
    })
    readonly difficulty: FilterDto<Difficulty>;

    @ApiProperty({
        description: 'List of applicable filters by meal type category',
        type: FilterDto,
        required: true
    })
    readonly mealType: FilterDto<string>;

    @ApiProperty({
        description: 'List of applicable filters by diet type category',
        type: FilterDto,
        required: true
    })
    readonly dietType: FilterDto<string>;
}

export { Filters as FiltersDto };
