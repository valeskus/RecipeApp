import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as RecipesStore from '../../stores/recipes';

export const useSortController = () => {
  const [activeSortId, setActiveSortId] = React.useState('');
  const navigation = useNavigation();

  const {sortOptions} = RecipesStore.useRecipesStore();

  const onSortChange = useCallback(
    (id: string) => {
      if (activeSortId === id) {
        return setActiveSortId('');
      }
      setActiveSortId(id);
    },
    [activeSortId],
  );

  const onSelectPress = () => {
    navigation.goBack();
  };

  return {
    onSelectPress,
    onSortChange,
    sortOptions,
    activeSortId,
  };
};
