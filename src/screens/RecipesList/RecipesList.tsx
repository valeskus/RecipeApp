import React, {useCallback} from 'react';
import {ScrollView, StyleSheet, StatusBar} from 'react-native';
import {Search} from '../../UI/Search';
import {RecipesCards} from '../../components/RecipesCards';
import {ButtonBar} from '../../components/ButtonBar';

//TODO: Props import??? How to get route.params?

export function RecipesList(): JSX.Element {
  const [gridType, setGridType] = React.useState(true);
  // const {title} = route.params;
  const title = '';

  const changeCardType = useCallback((type: boolean) => {
    return setGridType(type);
  }, []);

  return (
    <ScrollView style={styles.recipiesScreenContainer}>
      <StatusBar />
      <Search onSearch={() => {}} />
      <ButtonBar onCardTypeChange={changeCardType} gridType={gridType} />
      <RecipesCards gridType={gridType} categoryTitle={title} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  recipiesScreenContainer: {
    flex: 1,
    padding: 10,
  },
});
