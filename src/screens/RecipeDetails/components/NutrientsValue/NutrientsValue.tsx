import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './styles';

import {Icons} from '../../../../UI/Icons';

interface Props {
  // kcal: number;
  // protein: number;
  // fats: number;
  // carbs: number;
  nutrients: {
    kcal: number;
    protein: number;
    fats: number;
    carbs: number;
  };
}

export function NutrientsValue({nutrients}: Props): JSX.Element {
  return (
    <View style={styles.nutrientValuesContainer}>
      <View style={styles.column}>
        <View style={styles.nutrientValue}>
          <Image style={styles.dotIcon} source={Icons.kcal} />
          <Text style={styles.title}>{nutrients.kcal} kcal</Text>
        </View>
        <View style={styles.nutrientValue}>
          <Image style={styles.dotIcon} source={Icons.carbs} />
          <Text style={styles.title}>{nutrients.carbs}g carbs</Text>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.nutrientValue}>
          <Image style={styles.dotIcon} source={Icons.proteins} />
          <Text style={styles.title}>{nutrients.protein}g protein</Text>
        </View>
        <View style={styles.nutrientValue}>
          <Image style={styles.dotIcon} source={Icons.fats} />
          <Text style={styles.title}>{nutrients.fats}g fats</Text>
        </View>
      </View>
    </View>
  );
}
