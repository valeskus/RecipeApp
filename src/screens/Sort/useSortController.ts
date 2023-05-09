import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as RecipesStore from '../../stores/recipes';

export const useSortController = () => {
  const [sortItem, setSortItem] = React.useState('');
  const navigation = useNavigation();

  const {sortOptions} = RecipesStore.useRecipesStore();

  const onSortChange = useCallback(
    (id: string) => {
      if (sortItem === id) {
        return setSortItem('');
      }
      setSortItem(id);
    },
    [sortItem],
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
    onSortChange,
    sortOptions,
    sortItem,
  };
};
