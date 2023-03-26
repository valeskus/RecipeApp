import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Button} from '../Button';
import {CategoryCard} from '../CategoryCard';
import {Image} from '../Image';
import {ProductCardGrid} from '../Product Card/ProductCardGrid';
import {ProductCardLine} from '../Product Card/ProductCardLine';
import {SearchBar} from '../SearchBar';
import {Toggle} from '../Toggle';

export const Playground: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.PlaygroundContainer}>
      <ScrollView style={styles.PlaygroundContainer}>
        <Button icon="like" onPress={() => {}} active={true} />
        <CategoryCard title="Breacfast" onPress={() => {}} image={Image} />
        <ProductCardGrid
          title="Nazvanie"
          calories="500"
          time="1:50"
          onPress={() => {}}
          image={Image}
        />
        <ProductCardLine
          image={Image}
          title="Nazvanie"
          calories="500"
          time="1:50"
          onPress={() => {}}
        />
        <Toggle onChange={() => {}} items={['Ingredients', 'Instructions']} />

        <SearchBar />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  PlaygroundContainer: {
    flex: 1,
  },
});
