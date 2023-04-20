import React, {useCallback} from 'react';
import {FilterModel} from '../../models';
import {useNavigation} from '@react-navigation/native';

export const useFilterController = () => {
  const [filterList, setFiltreList] = React.useState([{}]);
  const navigation = useNavigation();
  //   const {filters} = RecipesStore.useRecipesStore();
  const filters: Array<FilterModel> = [
    {
      id: '1',
      title: 'Filter 1',
      values: [
        {label: 'value 1', id: 'value 1.1'},
        {label: 'value 2', id: 'value 1.2'},
      ],
    },
    {
      id: '2',
      title: 'Filter 2',
      values: [
        {label: 'value 1', id: 'value 2.1'},
        {label: 'value 2', id: 'value 2.2'},
      ],
    },
  ];

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

  return {
    onCacnelPress,
    onFilterChange,
    filters,
  };
};
