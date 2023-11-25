import { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Icons } from '@UI/Icons';

export const useRecipesListControlsController = (
  onCardTypeChange: (type: 'grid' | 'linear') => void,
  gridType: 'grid' | 'linear',
  activeSort: string
) => {

  const [sortButtonIcon, setSortButtonIcon] = useState<keyof typeof Icons>('sort');

  const changeSortButtonIcon = useCallback(() => {
    switch (activeSort) {
      case 'relevance': return setSortButtonIcon('sort');
      case 'time': return setSortButtonIcon('hour');
      case 'alphabetically': return setSortButtonIcon('sort');
      case '-alphabetically': return setSortButtonIcon('sort');
      case 'calories': return setSortButtonIcon('sort');
      case '-calories': return setSortButtonIcon('sort');
    }
  }, [activeSort]);

  useEffect(() => {
    changeSortButtonIcon();
  }, [activeSort]);

  const navigation = useNavigation();

  const changeType = useCallback(() => {
    if (gridType === 'grid') {
      return onCardTypeChange('linear');
    }

    return onCardTypeChange('grid');
  }, [onCardTypeChange, gridType]);

  const handleSortPress = () => {
    return navigation.navigate('Sort');
  };

  const handleFilterPress = () => {
    return navigation.navigate('Filter');
  };

  return {
    changeType,
    handleSortPress,
    handleFilterPress,
    sortButtonIcon,
  };
};
