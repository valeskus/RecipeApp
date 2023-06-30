export enum SortOptions {
    RELEVANCE = 'relevance',
    TIME_ASC = 'time',
    ALPHABETICALLY_ASC = 'alphabetically',
    ALPHABETICALLY_DESC = '-alphabetically',
    CALORIES_ASC = 'calories',
    CALORIES_DESC = '-calories',
}

export enum Difficulty {
    hard = 2,
    normal = 1,
    easy = 0
}

export enum Calories {
    lte100 = 'lte100',
    lte250 = 'lte250',
    lte500 = 'lte500',
    lte750 = 'lte750',
    lte1000 = 'lte1000',
    gt1000 = 'gt1000',
}

export enum TotalTime {
    lte20 = 'lte20',
    lte30 = 'lte30',
    lte45 = 'lte45',
    lte60 = 'lte60',
    gt60 = 'gt60',
}

export interface Filter<T> {
    value: T;
    count: number;
}

export type Facet<T> = Array<Filter<T>>;
