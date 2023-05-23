import React from 'react';
import {View} from 'react-native';
import {DetailRecipeModel} from '../../../../models';
import {NutrientsValue} from '../NutrientsValue';
import {Toggle} from '../../../../UI/Toggle';
import {useKcalCounterControler} from './useKcalCounterControler';

interface Props {
  recipe: DetailRecipeModel;
}

export function KcalCounter({recipe}: Props): JSX.Element {
  const {activeKcalItem, onTogglePress, onCount} =
    useKcalCounterControler(recipe);

  return (
    <View>
      <Toggle
        items={['100g', '1 serving', 'all amount']}
        activeItem={activeKcalItem}
        onChange={onTogglePress}
      />
      <NutrientsValue nutrients={onCount()} />
    </View>
  );
}
