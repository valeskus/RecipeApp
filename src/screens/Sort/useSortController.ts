import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';

export const useSortController = () => {
  // const [updateSort, setUpdateSort] = React.useState([]);
  const navigation = useNavigation();

  const { sortOptions } = RecipesStore.useRecipesStore();
  // console.log(sortOptions);

  // const onSortChange = useCallback((isActive: boolean, value: string) => {

  //   // return sort;
  // },
  // [sortOptions],
  // );

  const onSelectPress = () => {
    navigation.goBack();
  };

  useEffect(() => {

  }, []);

  return {
    onSelectPress,
    // onSortChange,
    sortOptions,
    // activeSortId,
  };
};
