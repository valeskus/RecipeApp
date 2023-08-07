import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

import { FilterItemValueModel, FilterModel } from 'src/models';

export const useFilterController = () => {
  const [filterList, setFilterList] = React.useState<FilterModel>({
    calories: [],
    dietType: [],
    difficulty: [],
    mealType: [],
    totalTime: [],
  });
  const navigation = useNavigation();

  const { filters } = RecipesStore.useRecipesStore();
  const { searchTerm, sort } = SearchStore.useSearchStore();
  const setSearchOptions = SearchStore.useSetSearchOptions();

  const onFilterChange = useCallback((changeItemValue: FilterItemValueModel[], changeItem: keyof FilterModel) => {
    // setSearchOptions({ searchTerm, sort });
    setFilterList({ ...filterList, [changeItem]: changeItemValue });

  },
  [filterList],
  );

  const onSelectPress = useCallback(() => {
    setSearchOptions({ searchTerm, sort });
    navigation.goBack();
  },
  [],
  );

  return {
    onSelectPress,
    onFilterChange,
    filters,

  };
};
