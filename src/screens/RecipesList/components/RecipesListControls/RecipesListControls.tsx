import React from 'react';
import { View } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useButtonBarController } from './hooks';

interface Props {
  onCardTypeChange: (type: 'grid' | 'linear') => void;
  gridType: 'grid' | 'linear';
  isFilterActive: boolean;
  isSortActive: boolean;
}

export function RecipesListControls({
  onCardTypeChange,
  gridType,
  isFilterActive,
  isSortActive,
}: Props): JSX.Element {
  const { changeType, handleFilterPress, handleSortPress } =
    useButtonBarController(onCardTypeChange, gridType);

  return (
    <View style={styles.buttonBarContainer}>
      <Button icon="filter" onPress={handleFilterPress} active={isFilterActive} />
      <Button icon="sort" onPress={handleSortPress} active={isSortActive} />
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
