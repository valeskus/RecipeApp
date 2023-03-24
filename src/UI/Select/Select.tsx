import React, {useCallback, useState} from 'react';
import {StyleSheet, Pressable, Text, View, LayoutAnimation} from 'react-native';
import {Colors} from '../Colors';

export type Props = {
  items: [string, string];
  onChange: (element: string) => void;
};

export function Select({items, onChange}: Props): JSX.Element {
  const [activeItem, setActiveItem] = useState('');

  const setActive = useCallback(
    (activeElement: string): void => {
      setActiveItem(activeElement);
      onChange(activeElement);
      toggleBox();
    },
    [onChange],
  );
  const toggleBox = () => {
    // LayoutAnimation.configureNext({
    //   duration: 200,
    //   update: {type: 'spring', springDamping: 0.4},
    // });
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  return (
    <View style={styles.selectContainer}>
      <View
        style={[
          styles.selectItemActive,
          activeItem === items[1] && styles.moveRight,
        ]}
      />
      <View style={[styles.selectItem]}>
        {items.map(item => {
          return (
            <Pressable
              onPress={() => setActive(item)}
              style={[styles.selectButton]}>
              <Text
                style={[
                  styles.selectItemTitle,
                  activeItem === item && styles.activeTitle,
                ]}>
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  selectContainer: {
    backgroundColor: Colors.tertiary,
    width: 350,
    marginLeft: 30,
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 10,
    padding: 15,
  },
  selectButton: {
    flex: 1,
  },
  selectItemActive: {
    backgroundColor: Colors.secondary,
    width: 175,
    position: 'absolute',
    borderRadius: 10,
    zIndex: 10,
    paddingVertical: 15,
  },
  selectItem: {
    position: 'absolute',
    width: 350,
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex: 10,
  },
  selectItemTitle: {
    flex: 1,
    alignSelf: 'center',
    padding: 5,
  },
  activeTitle: {
    color: Colors.background,
  },
  moveRight: {
    right: 0,
  },
});
