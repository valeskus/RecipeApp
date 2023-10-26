import React from 'react';
import { View, Text } from 'react-native';

import { InstructionModel } from '../../../../models';
import { InstructionsListItem } from '../InstructionsListItem';

import { styles } from './styles';

interface Props {
  instructions: Array<InstructionModel>;
}

export function InstructionsList({ instructions }: Props): JSX.Element {
  return (
    <View style={styles.instructionsContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Instructions</Text>
      </View>
      {instructions.map((item, index) => {
        return (
          <InstructionsListItem
            image={item.image}
            description={item.description}
            count={index + 1}
            key={index}
          />
        );
      })}
    </View>
  );
}
