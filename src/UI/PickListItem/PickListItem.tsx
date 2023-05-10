import React, {useCallback} from 'react';
import {Image, Pressable, View, Text} from 'react-native';
import {Icons} from '../Icons';
import {styles} from './styles';

interface Props {
  item: string;
  id: string;
  onChange: (element: string) => void;
  active: string;
}

export function PickListItem({item, id, onChange, active}: Props): JSX.Element {
  const setActive = useCallback(
    (activeElement: string): void => {
      if (active === activeElement) {
        return onChange('');
      }
      onChange(id);
    },
    [onChange, id, active],
  );

  return (
    <View style={styles.pickListItemContainer}>
      <Pressable onPress={() => setActive(id)} style={styles.pick}>
        {active === id && (
          <Image source={Icons.dot} style={[styles.pickActive]} />
        )}
      </Pressable>
      <Text style={styles.pickListItem}>{item}</Text>
    </View>
  );
}
