import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../UI/Button';
import {useButtonBarController} from './hooks';

interface Props {
  onCardTypeChange: (type: boolean) => void;
  gridType: boolean;
}

export function ButtonBar({onCardTypeChange, gridType}: Props): JSX.Element {
  const {changeType, handleFilterPress, handleSortPress} =
    useButtonBarController(onCardTypeChange, gridType);
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
