import React, {useCallback, useState} from 'react';
import {StyleSheet, Pressable, Text, View, LayoutAnimation} from 'react-native';
import {Colors} from '../Colors';

export type Props = {
  items: [string, string];
  onChange: (element: string) => void;
};

export function Toggle({items, onChange}: Props): JSX.Element {
  const [activeItem, setActiveItem] = useState(items[0]);

  const setActive = useCallback(
    (activeElement: string): void => {
      setActiveItem(activeElement);
      onChange(activeElement);
      toggleBox();
    },
    [onChange],
  );
  const toggleBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  return (
    <View style={styles.selectContainer}>
      <View style={styles.activeItemWrap}>
        <View
          style={[
            styles.selectItemActive,
            activeItem === items[1] && styles.moveRight,
          ]}
        />
      </View>

      <View style={[styles.selectItem]}>
        {items.map((item, index) => {
          return (
            <Pressable
              onPress={() => setActive(item)}
              style={[styles.selectButton]}
              key={index}>
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
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 10,
    alignItems: 'center',
  },
  selectButton: {
    flex: 1,
    paddingVertical: 10,
  },
  selectItemActive: {
    backgroundColor: Colors.secondary,
    width: '50%',
    borderRadius: 10,
    zIndex: 10,
    paddingVertical: 20,
  },
  selectItem: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex: 10,
  },
  selectItemTitle: {
    flex: 1,
    alignSelf: 'center',
  },
  activeTitle: {
    color: Colors.background,
  },
  moveRight: {
    alignSelf: 'flex-end',
  },
  activeItemWrap: {
    width: '100%',
    position: 'absolute',
  },
});
