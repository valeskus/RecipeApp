import React, { useCallback } from 'react';
import { Image, Pressable, View, Text } from 'react-native';

import { Icons } from '../Icons';

import { styles } from './styles';

interface Props {
  label: string;
  value: string;
  isActive: boolean;
  onChange: (value: string) => void;
}

export function PickListItem({
  label,
  value,
  onChange,
  isActive,
}: Props): JSX.Element {

  const setActive = useCallback((): void => {
    onChange(value);
  },
    [onChange, value],
  );

  return (
    <Pressable onPress={setActive} style={styles.pickListItemContainer}>
      <View style={styles.pick}>
        {isActive && (
          <Image source={Icons.dot} style={styles.pickActive} />
        )}
      </View>
      <Text style={styles.pickListItem}>{label}</Text>
    </Pressable>
  );
}
