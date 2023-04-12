import React from 'react';
import {ScrollView, StyleSheet, StatusBar} from 'react-native';
import {Search} from '../../UI/Search';
import {RecipesCards} from '../../components/RecipesCards';

export function RecipesList(): JSX.Element {
  const [cardType, setCardType] = React.useState('grid');

  return (
    <ScrollView style={styles.recipiesScreenContainer}>
      <StatusBar />
      <Search onSearch={() => {}} />
      <RecipesCards cardType={cardType} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  recipiesScreenContainer: {
    flex: 1,
    padding: 10,
  },
});
