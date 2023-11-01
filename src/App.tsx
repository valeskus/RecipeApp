import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Platform, SafeAreaView, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import LottieView from 'lottie-react-native';

import { Header } from '@components/Header';
import { SettingsButton } from '@components/SettingsButton';

import { LanguageManager } from '@managers/LanguageManager';

import { store } from './stores/rootStore';
import { CategoriesList } from './screens/CategoriesList';
import { RecipesList } from './screens/RecipesList';
import { Filter, ClearButton } from './screens/Filter';
import { Sort } from './screens/Sort';
import { RecipeDetails } from './screens/RecipeDetails';
import { Settings } from './screens/Settings';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type RootStackParamList = {
  Categories: undefined;
  Settings: undefined;
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

export function App(): JSX.Element {
  const { t } = useTranslation();

  useEffect(() => {
    LanguageManager.initLanguage();
  }, []);

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
                title: t('screenHeaderTitle.categories'),
                header: ({ options }) => (
                  <SafeAreaView>
                    <Header
                      options={options}
                      headerLeft={<SettingsButton />}
                      seasonAnimate={(
                        <LottieView
                          style={{ flex: 1 }}
                          source={require('./UI/animationConfigs/snow.json')}
                          autoPlay
                          loop
                          resizeMode="cover"
                        />
                      )}
                    />
                  </SafeAreaView>
                ),
              }}
            />
            <Stack.Screen
              name="Recipes"
              component={RecipesList}
              options={{
                title: t('screenHeaderTitle.recipes'),
                header: ({ options }) => (
                  <SafeAreaView>
                    <Header
                      options={options}
                      seasonAnimate={(
                        <LottieView
                          style={{ flex: 1 }}
                          source={require('./UI/animationConfigs/snow.json')}
                          autoPlay
                          loop
                          resizeMode="cover"
                        />
                      )}
                    />
                  </SafeAreaView>
                ),
              }}
            />
          </Stack.Group>
          <Stack.Screen
            name="Sort"
            component={Sort}
            options={{
              presentation: 'modal',
              title: t('screenHeaderTitle.sort'),
              header: ({ options }) => <Header options={options} />,
            }}
          />
          <Stack.Screen
            name="Filter"
            component={Filter}
            options={{
              presentation: 'modal',
              title: t('screenHeaderTitle.filter'),
              header: ({ options }) => (
                <Header options={options} headerRight={<ClearButton />} />
              ),
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              presentation: 'modal',
              title: t('screenHeaderTitle.settings'),
              header: ({ options }) => (
                <Header options={options} />
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
