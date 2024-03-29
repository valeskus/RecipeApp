import React, { useRef } from 'react';
import { Animated, Dimensions, StatusBar, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';

import { Tabs } from '@UI/Tabs';
import { Counter } from '@UI/Counter';
import { Toggle } from '@UI/Toggle';

import { TimeCounter } from '../../UI/TimeCounter';

import { styles } from './styles';
import { useRecipeDetailsController } from './useRecipeDetailsController';
import { Header } from './components/Header';
import { IngredientsList } from './components/IngredientsList ';
import { InstructionsList } from './components/InstructionsList';
import { RecipeDetailsSkeleton } from './components/RecipeDetailsSkeleton';
import {
  PrescriptionCardSection,
} from './hooks';
import { NutrientsValue } from './components/NutrientsValue';
import { Error } from './components/Error';

const { height } = Dimensions.get('screen');

export function RecipeDetails(): JSX.Element {
  const {
    recipe,
    onServingsCountChange,
    onPrescriptionCardSectionChange,
    onNutrientsSectionChange,
    nutrients,
    nutrientsActiveSection,
    prescriptionCardActiveSection,
    servingsCount,
    isLoading,
    isError,
    fetchData,
    nutritionLabelsMap,
  } = useRecipeDetailsController();
  const { t } = useTranslation();

  const scrollYRef = useRef(new Animated.Value(0));

  if (isLoading) {
    return <RecipeDetailsSkeleton />;
  }

  if (isError || !recipe) {
    return <Error onRetry={fetchData} />;
  }

  const scale = scrollYRef.current.interpolate({
    inputRange: [-height, 0, 1],
    outputRange: [5, 1, 1],
    extrapolateLeft: 'clamp',
  });

  return (
    <View style={styles.detailsScreenContainer}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />
      <Header scrollYRef={scrollYRef} />
      <Animated.View style={[styles.imageContainer, { transform: [{ scale }] }]}>
        <FastImage source={{ uri: recipe.image }}
          style={styles.image}
        />
      </Animated.View>
      <Animated.ScrollView
        scrollIndicatorInsets={{ right: 1 }}
        style={styles.detailsScreen}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollYRef.current,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
      >
        <View style={styles.contentContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>{recipe.title}</Text>
            <View style={styles.timeContainer}>
              <TimeCounter time={recipe.time} />
            </View>
          </View>
          <Text style={styles.description}>{recipe.description}</Text>
          <Toggle
            items={nutritionLabelsMap}
            activeItem={nutrientsActiveSection}
            onChange={onNutrientsSectionChange}
          />
          <NutrientsValue nutrients={nutrients} />
          <Tabs
            activeItem={prescriptionCardActiveSection}
            onChange={onPrescriptionCardSectionChange}
          >
            <View
              aria-label={t('recipeDetails.ingredients')}
              aria-id={PrescriptionCardSection.Ingredients}
            >
              <IngredientsList
                ingredients={recipe.ingredients}
                servingCount={servingsCount || recipe.servingsCount}
              />
              <Counter
                count={servingsCount || recipe.servingsCount}
                onChange={onServingsCountChange}
              />
            </View>
            <View
              aria-label={t('recipeDetails.instructions')}
              aria-id={PrescriptionCardSection.Instructions}
            >
              <InstructionsList instructions={recipe.instructions} />
            </View>
          </Tabs>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
