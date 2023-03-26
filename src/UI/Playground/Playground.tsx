import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Button} from '../Button';
import {CategoryCard} from '../CategoryCard';
import {ImageMock} from '../ImageMock';
import {IngredientsListItem} from '../IngredientsListItem';
import {ProductCardGrid} from '../Product Card/ProductCardGrid';
import {ProductCardLine} from '../Product Card/ProductCardLine';
import {SearchBar} from '../SearchBar';
import {Toggle} from '../Toggle';

export const Playground: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.PlaygroundContainer}>
      <ScrollView style={styles.PlaygroundContainer}>
        <Button icon="like" onPress={() => {}} active={true} />
        <CategoryCard title="Breacfast" onPress={() => {}} image={ImageMock} />
        <ProductCardGrid
          title="Nazvanie"
          calories="500"
          time="1:50"
          onPress={() => {}}
          image={ImageMock}
        />
        <ProductCardLine
          image={ImageMock}
          title="Nazvanie"
          calories="500"
          time="1:50"
          onPress={() => {}}
        />
        <IngredientsListItem
          title="Product"
          count="200mg"
          description=" jdhaskdhjkashdhadkhsadjhsahhjfhjkfhsjdfhjdshfjdhfjkdshfkshkdhsjdhsajhd"
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
