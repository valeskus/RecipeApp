import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {InstructionsListItem} from '../../../../UI/InstructionsListItem';
import {InstructionModel} from '../../../../models';

interface Props {
  instructions: Array<InstructionModel>;
}

export function InstructionsList({instructions}: Props): JSX.Element {
  return (
    <View style={styles.instructionsContainer}>
      {instructions.map((item, index) => {
        return (
          <InstructionsListItem
            image={item.image}
            description={item.description}
            count={index + 1}
            key={item.id}
          />
        );
      })}
    </View>
  );
}