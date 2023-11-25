import React from 'react';
import { View } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useRecipesListControlsController } from './useRecipesListControlsController';

interface Props {
  onCardTypeChange: (type: 'grid' | 'linear') => void;
  gridType: 'grid' | 'linear';
  isFilterActive: boolean;
  activeSort: string;
}

export function RecipesListControls({
  onCardTypeChange,
  gridType,
  isFilterActive,
  activeSort,
}: Props): JSX.Element {
  const { changeType, handleFilterPress, handleSortPress, sortButtonIcon } =
    useRecipesListControlsController(onCardTypeChange, gridType, activeSort);

  return (
    <View style={styles.buttonBarContainer}>
      <Button icon="filter" onPress={handleFilterPress} active={isFilterActive} />
      <Button icon={sortButtonIcon} onPress={handleSortPress} active={!!activeSort && activeSort !== 'relevance'} />
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
