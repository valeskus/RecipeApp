export interface FilterValuesMapModel {
  lte500: string;
  lte250: string;
  lte750: string;
  lte1000: string;
  gt1000: string;
  lte30: string;
  lte45: string;
  lte60: string;
  0: string;
  1: string;
  2: string;
}

export const FilterValuesMap: FilterValuesMapModel = {
  lte500: 'Up to 500 kcal',
  lte250: 'Up to 250 kcal',
  lte750: 'Up to 750 kcal',
  lte1000: 'Up to 1000 kcal',
  gt1000: 'More than 1000 kcal',
  lte30: 'Under 30 min',
  lte45: 'Under 45 min',
  lte60: 'Under 60 min',
  0: 'Easy',
  1: 'More effort',
  2: 'A challenge',
};
