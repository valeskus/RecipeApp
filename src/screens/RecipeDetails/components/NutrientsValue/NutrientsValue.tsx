import React from 'react';
import { Image, Text, View } from 'react-native';

import { Icons } from '@UI/Icons';

import { Nutrients } from '../../hooks';

import { styles } from './styles';

interface Props {
  nutrients: Nutrients;
}

const formatValue = (value: number) => {
  return Number(value.toFixed(1));
};

export function NutrientsValue({ nutrients }: Props): JSX.Element {
  return (
    <View style={styles.nutrientValuesContainer}>
      <View style={styles.column}>
        <View style={styles.nutrientValue}>
          <Image style={styles.dotIcon} source={Icons.kCal} />
          <Text style={styles.title}>{formatValue(nutrients.kCal)} kCal</Text>
        </View>
        <View style={styles.nutrientValue}>
          <Image style={styles.dotIcon} source={Icons.carbs} />
          <Text style={styles.title}>
            {formatValue(nutrients.carbs)}g carbs
          </Text>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.nutrientValue}>
          <Image style={styles.dotIcon} source={Icons.proteins} />
          <Text style={styles.title}>
            {formatValue(nutrients.protein)}g protein
          </Text>
        </View>
        <View style={styles.nutrientValue}>
          <Image style={styles.dotIcon} source={Icons.fats} />
          <Text style={styles.title}>{formatValue(nutrients.fats)}g fats</Text>
        </View>
      </View>
    </View>
  );
}
