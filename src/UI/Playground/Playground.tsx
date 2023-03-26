import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Button} from '../Button';
import {CategoryCard} from '../CategoryCard';
import {ImageMock} from '../ImageMock';
import {IngredientsListItem} from '../IngredientsListItem';
import {InstructionListItem} from '../InstructionsListItem';
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
          description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        />
        <InstructionListItem
          image={ImageMock}
          count={1}
          description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
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
