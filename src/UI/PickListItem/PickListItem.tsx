import React, {useCallback} from 'react';
import {Image, Pressable, View, Text} from 'react-native';
import {Icons} from '../Icons';
import {styles} from './styles';

interface Props {
  label: string;
  id: string;
  onChange: (id: string) => void;
  activeId: string;
}

export function PickListItem({
  label,
  id,
  onChange,
  activeId,
}: Props): JSX.Element {
  const setActive = useCallback(
    (activeElement: string): void => {
      if (activeId === activeElement) {
        return onChange('');
      }
      onChange(id);
    },
    [onChange, id, activeId],
  );

  return (
    <View style={styles.pickListItemContainer}>
      <Pressable onPress={() => setActive(id)} style={styles.pick}>
        {activeId === id && (
          <Image source={Icons.dot} style={[styles.pickActive]} />
        )}
      </Pressable>
      <Text style={styles.pickListItem}>{label}</Text>
    </View>
  );
}
