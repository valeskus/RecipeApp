import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, Pressable, View, Text} from 'react-native';
import {Colors} from '../Colors';
import {Icons} from '../Icons';

export type Props = {
  item: string;
  onChange: (element: string) => void;
};

export function PickListItem({item, onChange}: Props): JSX.Element {
  const [activeItem, setActiveItem] = useState('');

  const setActive = useCallback(
    (activeElement: string): void => {
      if (activeItem === activeElement) {
        setActiveItem('');
        return onChange('');
      }
      setActiveItem(activeElement);
      onChange(activeElement);
    },
    [activeItem, onChange],
  );

  return (
    <View style={styles.pickListItemContainer}>
      <Pressable onPress={() => setActive(item)} style={styles.pick}>
        {activeItem === item && (
          <Image source={Icons.dot} style={[styles.pickActive]} />
        )}
      </Pressable>
      <Text style={styles.pickListItem}>{item}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  pickListItemContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.background,
    alignItems: 'center',
    marginVertical: 10,
  },
  pick: {
    borderRadius: 5,
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: Colors.borderTextSecondary,
    justifyContent: 'center',
    position: 'relative',
  },
  pickActive: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    position: 'absolute',
  },
  pickListItem: {
    color: Colors.text,
    marginLeft: 5,
    fontSize: 17,
  },
});
