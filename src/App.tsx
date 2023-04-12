import React from 'react';
import {Provider} from 'react-redux';
import {Platform, SafeAreaView, StyleSheet, UIManager} from 'react-native';
import {store} from './stores/rootStore';
import {CategoriesList} from './screens/CategoriesList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipesList} from './screens/RecipesList';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.appContainer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Recipes" component={RecipesList} />

            <Stack.Screen name="Categories" component={CategoriesList} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
