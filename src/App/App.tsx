import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Platform, SafeAreaView, StatusBar, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import SplashScreen from 'react-native-splash-screen';

import { LottieAnimation } from '@UI/LottieAnimation';
import { Colors } from '@UI/Colors';

import { store } from '@stores/rootStore';

import { Header } from '@components/Header';
import { SettingsButton } from '@components/SettingsButton';

import { EventService } from '@services/EventService';

import { CategoriesList } from '../screens/CategoriesList';
import { RecipesList } from '../screens/RecipesList';
import { Sort } from '../screens/Sort';
import { ClearButton, Filter } from '../screens/Filter';
import { Settings } from '../screens/Settings';
import { RecipeDetails } from '../screens/RecipeDetails';
import { LanguageScreen } from '../screens/Settings/components/LanguageScreen';
import { InfoScreen } from '../screens/Settings/components/InfoScreen';

import { styles } from './styles';
import { useInitRequiredData } from './hooks';
import { AppStartSkeleton } from './components/AppStartSkeleton';

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
  InfoScreen: undefined;
  LanguageScreen: undefined;
};

const Stack = createStackNavigator();
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export function ConnectedApp(): JSX.Element {
  const { t } = useTranslation();
  const { isRequiredDataInitialized } = useInitRequiredData();

  useEffect(() => {
    SplashScreen.hide();
    EventService.emit('app:start');
  }, []);

  if (!isRequiredDataInitialized) {
    return (
      <SafeAreaView style={styles.appStartSkeletonContainer}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
        <AppStartSkeleton />
      </SafeAreaView>
    );
  }

  return (
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
          name="LanguageScreen"
          component={LanguageScreen}
          options={{
            title: t('screenHeaderTitle.language'),
            header: ({ options }) => (
              <Header options={options} />
            ),
          }}
        />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
          options={{
            title: t('screenHeaderTitle.info'),
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
      </Stack.Navigator >
    </NavigationContainer >

  );
}

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <ConnectedApp />
    </Provider>
  );
}
