import React from 'react';
import { View } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useButtonBarController } from './hooks';

interface Props {
  onCardTypeChange: (type: 'grid' | 'linear') => void;
  gridType: 'grid' | 'linear';
}

export function RecipesListControls({
  onCardTypeChange,
  gridType,
}: Props): JSX.Element {
  const { changeType, handleFilterPress, handleSortPress } =
    useButtonBarController(onCardTypeChange, gridType);

  return (
    <View style={styles.buttonBarContainer}>
      <Button icon="filter" onPress={handleFilterPress} />
      <Button icon="sort" onPress={handleSortPress} />
      <View style={styles.cardFormButtonContainer}>
        {gridType === 'grid' ? (
          <Button icon="grid" onPress={changeType} />
        ) : (
          <Button icon="lineGrid" onPress={changeType} />
        )}
      </View>
    </View>
  );
}
