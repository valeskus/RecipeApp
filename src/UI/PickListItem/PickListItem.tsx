import React, { useCallback } from 'react';
import { Image, Pressable, View, Text } from 'react-native';

import { Icons } from '../Icons';

import { styles } from './styles';

interface Props {
  label: string;
  onChange: (value: string) => void;
  isActive: boolean;
}

export function PickListItem({
  label,
  onChange,
  isActive,
}: Props): JSX.Element {

  const setActive = useCallback((): void => {
    onChange(label);
  },
  [onChange, isActive],
  );

  return (
    <View style={styles.pickListItemContainer}>
      <Pressable onPress={setActive} style={styles.pick}>
        {isActive && (
          <Image source={Icons.dot} style={styles.pickActive} />
        )}
      </Pressable>
      <Text style={styles.pickListItem}>{label}</Text>
    </View>
  );
}
