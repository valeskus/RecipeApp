import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

export const useButtonBarController = (
  onCardTypeChange: (type: boolean) => void,
  gridType: boolean,
) => {
  const navigation = useNavigation();

  const changeType = useCallback(() => {
    if (gridType) {
      return onCardTypeChange(false);
    }
    return onCardTypeChange(true);
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
