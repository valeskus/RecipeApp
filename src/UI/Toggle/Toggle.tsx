import React, {useCallback} from 'react';
import {Pressable, Text, View, LayoutAnimation} from 'react-native';
import {styles} from './styles';

interface Props {
  items: [string, string] | [string, string, string];
  activeItem: string;
  onChange: (element: string) => void;
}

export function Toggle({items, onChange, activeItem}: Props): JSX.Element {
  const setActive = useCallback(
    (activeElement: string): void => {
      onChange(activeElement);
      toggleBox();
    },
    [onChange],
  );
  const toggleBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const activeItemWidth = useCallback(() => {
    return 100 / items.length;
  }, [items]);

  const getActiveItemPosition = useCallback(() => {
    return (100 / items.length) * items.indexOf(activeItem);
  }, [items, activeItem]);

  return (
    <View style={styles.selectContainer}>
      <View style={styles.activeItemWrap}>
        <View
          style={[
            {width: `${activeItemWidth()}%`},
            styles.selectItemActive,
            {left: `${getActiveItemPosition()}%`},
          ]}
        />
      </View>

      <View style={[styles.selectItem]}>
        {items.map((item, index) => {
          return (
            <Pressable
              onPress={() => setActive(items[index])}
              style={[styles.selectButton]}
              key={index}>
              <Text
                style={[
                  styles.selectItemTitle,
                  activeItem === items[index] && styles.activeTitle,
                ]}>
                {items[index]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
