import React from 'react';
import {Provider} from 'react-redux';
import {Platform, UIManager} from 'react-native';
import {store} from './stores/rootStore';
import {CategoriesList} from './screens/CategoriesList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipesList} from './screens/RecipesList';
import {Filter} from './screens/Filter';
import {Sort} from './screens/Sort';
import {RecipeDetails} from './screens/RecipeDetails';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type RootStackParamList = {
  Categories: undefined;
  Recipes: undefined;
  Sort: undefined;
  Filter: undefined;
  RecipeDetails: undefined;
  //TODO add id to Recipe Details
};
//TODO ceate sort and filter modal window from navigation
const Stack = createNativeStackNavigator();
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesList} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="Sort" component={Sort} />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
          <Stack.Screen name="Recipes" component={RecipesList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
