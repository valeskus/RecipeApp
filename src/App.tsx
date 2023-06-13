import React from 'react';

import { Provider } from 'react-redux';
import { Platform, SafeAreaView, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from '@components/Header';

import { store } from './stores/rootStore';
import { CategoriesList } from './screens/CategoriesList';
import { RecipesList } from './screens/RecipesList';
import { Filter, ClearButton } from './screens/Filter';
import { Sort } from './screens/Sort';
import { RecipeDetails } from './screens/RecipeDetails';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type RootStackParamList = {
  Categories: undefined;
  Recipes: undefined;
  Sort: undefined;
  Filter: undefined;
  RecipeDetails: {
    id: string;
  };
};

const Stack = createNativeStackNavigator();
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{
              header: ({ options }) => (
                <SafeAreaView>
                  <Header options={options} />
                </SafeAreaView>
              ),
            }}
          >
            <Stack.Screen
              name="Categories"
              component={CategoriesList}
              options={{
                title: 'Categories',
              }}
            />
            <Stack.Screen
              name="Recipes"
              component={RecipesList}
              options={{
                title: 'Recipes',
              }}
            />
          </Stack.Group>

          <Stack.Screen
            name="Sort"
            component={Sort}
            options={{
              presentation: 'modal',
              title: 'Sort',
              header: ({ options }) => <Header options={options} />,
            }}
          />
          <Stack.Screen
            name="Filter"
            component={Filter}
            options={{
              presentation: 'modal',
              title: 'Filter',
              header: ({ options }) => (
                <Header options={options} headerRight={<ClearButton />} />
              ),
            }}
          />

          <Stack.Screen
            name="RecipeDetails"
            component={RecipeDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
