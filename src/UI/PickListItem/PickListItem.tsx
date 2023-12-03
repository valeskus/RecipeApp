import React, { useCallback } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import { Icons } from '../Icons';

import { styles } from './styles';

interface Props {
  label: string;
  value: string;
  isActive: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function PickListItem({
  label,
  value,
  onChange,
  isActive,
  disabled,
}: Props): JSX.Element {

  const setActive = useCallback((): void => {
    onChange(value);
  },
    [onChange, value],
  );

  return (
    <TouchableOpacity
      onPress={setActive}
      style={styles.pickListItemContainer}
      disabled={disabled}
    >
      <View style={styles.pick}>
        {isActive && (
          <Image source={Icons.dot} style={styles.pickActive} />
        )}
      </View>
      <Text style={styles.pickListItem}>{label}</Text>
    </TouchableOpacity>
  );
}
