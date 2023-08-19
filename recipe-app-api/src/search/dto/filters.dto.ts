import { ApiProperty } from '@nestjs/swagger';

import { Calories, Difficulty, Facet, TotalTime } from '../models';

import { SearchDto } from './search.dto';
import { FilterDto } from './filter.dto';

interface FiltersData {
    calories: Facet<Calories>;
    totalTime: Facet<TotalTime>;
    difficulty: Facet<Difficulty>;
    mealType: Facet<string>;
    dietType: Facet<string>;
    inputFilters: SearchDto;
    translate: (selector: string) => string;
}

const filterOutEmpty = <T>(list: Facet<T>) => {
    return list.filter((item) => item.count);
};

const singleFilterTransformation = <T extends string | number>(
    translate: FiltersData['translate'],
    list: Facet<T>,
    appliedFilter?: T
) => {
    return filterOutEmpty(list).map((item) => ({
        ...item,
        isActive: appliedFilter === item.value,
        title: translate(item.value.toString()),
    }));
};

const multipleFilterTransformation = <T>(
    list: Facet<T>,
    appliedFilter?: Array<T>
) => {
    return filterOutEmpty(list).map((item) => ({
        ...item,
        title: item.value,
        isActive: appliedFilter?.includes(item.value) || false
    }));
};

class Filters {
    constructor({
        translate,
        calories,
        inputFilters,
        totalTime,
        difficulty,
        mealType,
        dietType
    }: FiltersData) {
        this.calories = {
            title: translate('search.filter.calories.name'),
            items: singleFilterTransformation(
                (value: string) => translate(`search.filter.calories.query.${value}`),
                calories,
                inputFilters.calories
            ),
            multiple: false,
        };
        this.totalTime = {
            title: translate('search.filter.total_time.name'),
            items: singleFilterTransformation(
                (value: string) => translate(`search.filter.total_time.query.${value}`),
                totalTime,
                inputFilters.totalTime
            ),
            multiple: false,
        };
        this.difficulty = {
            title: translate('search.filter.difficulty.name'),
            items: singleFilterTransformation(
                (value: string) => translate(`search.filter.difficulty.query.${value}`),
                difficulty,
                inputFilters.difficulty
            ),
            multiple: false,
        };
        this.mealType = {
            title: translate('search.filter.meal_type.name'),
            items: multipleFilterTransformation(mealType, inputFilters.mealType),
            multiple: true,
        };
        this.dietType = {
            title: translate('search.filter.diet_type.name'),
            items: multipleFilterTransformation(dietType, inputFilters.dietType),
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
