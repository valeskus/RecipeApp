import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Button} from '../Button';
import {CategoryCard} from '../CategoryCard';
import {ProductCardGrid} from '../Product Card/ProductCardGrid';
import {ProductCardLine} from '../Product Card/ProductCardLine';
import {SearchBar} from '../SearchBar';
import {Select} from '../Select';

export const Playground: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.PlaygroundContainer}>
      <ScrollView style={styles.PlaygroundContainer}>
        <Button icon="like" onPress={() => {}} active={true} />

        <CategoryCard title="Breacfast" onPress={() => {}} />
        <ProductCardGrid
          title="Nazvanie"
          calories="500"
          time="1:50"
          onPress={() => {}}
        />
        <ProductCardLine
          title="Nazvanie"
          calories="500"
          time="1:50"
          onPress={() => {}}
        />
        <SearchBar />
        <Select onChange={() => {}} items={['Ingredients', 'Instructions']} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  PlaygroundContainer: {
    flex: 1,
  },
});
