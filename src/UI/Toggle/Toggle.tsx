import React, {useCallback, useState} from 'react';
import {Pressable, Text, View, LayoutAnimation} from 'react-native';
import {styles} from './styles';

interface Props {
  items: [string, string];
  onChange: (element: string) => void;
}

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
        <Pressable
          onPress={() => setActive(items[0])}
          style={[styles.selectButton]}>
          <Text
            style={[
              styles.selectItemTitle,
              activeItem === items[0] && styles.activeTitle,
            ]}>
            {items[0]}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActive(items[1])}
          style={[styles.selectButton]}>
          <Text
            style={[
              styles.selectItemTitle,
              activeItem === items[1] && styles.activeTitle,
            ]}>
            {items[1]}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
