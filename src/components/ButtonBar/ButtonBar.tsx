import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {StyleSheet, View} from 'react-native';
import {Button} from '../../UI/Button';

export type Props = {
  onCardTypeChange: (type: boolean) => void | 2;
  gridType: boolean;
};

export function ButtonBar({onCardTypeChange, gridType}: Props): JSX.Element {
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

  return (
    <View style={styles.buttonBarContainer}>
      <Button icon="filter" onPress={handleFilterPress} />
      <Button icon="sort" onPress={handleSortPress} />
      <View style={styles.cardFormButtonContainer}>
        {gridType ? (
          <Button icon="grid" onPress={changeType} />
        ) : (
          <Button icon="lineGrid" onPress={changeType} />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonBarContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  cardFormButtonContainer: {
    flex: 2,
    alignItems: 'flex-end',
  },
});
