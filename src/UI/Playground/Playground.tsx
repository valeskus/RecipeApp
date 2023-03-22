import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '../Button';
import {CategoryCard} from '../CategoryCard';
import {ProductCardGrid} from '../Product Card/ProductCardGrid';

export const Playground: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.PlaygroundContainer}>
      <Button icon="like" onPress={() => {}} active={true} />
      <Button icon="carbs" onPress={() => {}} />
      <Button icon="menu" onPress={() => {}} active={true} />
      <CategoryCard title="Breacfast" onPress={() => {}} />
      <ProductCardGrid
        title="Nazvanie"
        calories="500"
        time="1:50"
        onPress={() => {}}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  PlaygroundContainer: {
    flex: 1,
  },
});
