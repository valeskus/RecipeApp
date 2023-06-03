import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useButtonBarController = (
  onCardTypeChange: (type: 'grid' | 'linear') => void,
  gridType: 'grid' | 'linear',
) => {
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
  };
};
