import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Platform, StatusBar, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import SplashScreen from 'react-native-splash-screen';

import { LottieAnimation } from '@UI/LottieAnimation';
import { Colors } from '@UI/Colors';

import { Header } from '@components/Header';
import { SettingsButton } from '@components/SettingsButton';

import { LanguageManager } from '@managers/LanguageManager';

import { EventService } from '@services/EventService';

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

const Stack = createStackNavigator();
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export function App(): JSX.Element {
  const { t } = useTranslation();

  useEffect(() => {
    LanguageManager.initLanguage();
    SplashScreen.hide();
    EventService.emit('app:start');
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          cardStyle: {
            backgroundColor: Colors.background,
          },
        }}
        >
          <Stack.Group>
            <Stack.Screen
              name="Categories"
              component={CategoriesList}
              options={{
                title: t('screenHeaderTitle.categories'),
                header: ({ options }) => (
                  <Header
                    options={options}
                    headerLeft={<SettingsButton />}
                    seasonAnimate={(
                      <LottieAnimation />
                    )}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Recipes"
              component={RecipesList}
              options={{
                title: t('screenHeaderTitle.recipes'),
                header: ({ options }) => (
                  <Header
                    options={options}
                    seasonAnimate={(
                      <LottieAnimation />
                    )}
                  />
                ),
              }}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{
            presentation: 'modal',
          }}
          >
            <Stack.Screen
              name="Sort"
              component={Sort}
              options={{
                title: t('screenHeaderTitle.sort'),
                header: ({ options }) => <Header ignoreTopOffset options={options} />,
              }}
            />
            <Stack.Screen
              name="Filter"
              component={Filter}
              options={{
                title: t('screenHeaderTitle.filter'),
                header: ({ options }) => (
                  <Header ignoreTopOffset options={options} headerRight={<ClearButton />} />
                ),
              }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{
                title: t('screenHeaderTitle.settings'),
                header: ({ options }) => (
                  <Header ignoreTopOffset options={options} />
                ),
              }}
            />
          </Stack.Group>
          <Stack.Screen
            name="RecipeDetails"
            component={RecipeDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator >
      </NavigationContainer >
    </Provider >
  );
}
