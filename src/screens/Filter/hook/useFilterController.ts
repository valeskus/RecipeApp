import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as RecipesStore from '../../../stores/recipes';

export const useFilterController = () => {
  const [filterList, setFiltreList] = React.useState([{}]);
  const navigation = useNavigation();

  const {filters} = RecipesStore.useRecipesStore();

  const onFilterChange = useCallback(
    (filterId: string, valueId: string) => {
      console.log(filterId, valueId);
      return setFiltreList([...filterList, {key: filterId, value: valueId}]);
    },
    [filterList],
  );

  const onCacnelPress = () => {
    navigation.goBack();
  };
  const onSelectPress = () => {
    navigation.goBack();
  };

  return {
    onCacnelPress,
    onSelectPress,
    onFilterChange,
    filters,
  };
};
