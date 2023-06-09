import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';

export const useFilterController = () => {
  const [filterList, setFilterList] = React.useState([{}]);
  const navigation = useNavigation();

  const { filters } = RecipesStore.useRecipesStore();

  const onFilterChange = useCallback(
    (filterId: string, valueId: string) => {
      return setFilterList([...filterList, { key: filterId, value: valueId }]);
    },
    [filterList],
  );

  const onSelectPress = () => {
    navigation.goBack();
  };

  return {
    onSelectPress,
    onFilterChange,
    filters,
  };
};
