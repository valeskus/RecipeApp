import React, {useRef} from 'react';
import {Animated, Dimensions, Text, View} from 'react-native';
import {styles} from './styles';
import {useRecipeDetailsControler} from './useRecipeDetailsController';
import {Header} from './components/Header';
import {TimeCounter} from './components/TimeCounter';

import {Toggle} from '../../UI/Toggle';
import {IngredientsList} from './components/IngredientsList ';
import {InstructionsList} from './components/InstructionsList';
import {RecipeDetailsSkeleton} from './components/RecipeDetailsSkeleton';
import {KcalCounter} from './components/KcalCounter';

const {height} = Dimensions.get('screen');

export function RecipeDetails(): JSX.Element {
  const {recipe, onTogglePress, activeSection} = useRecipeDetailsControler();
  const scrollYRef = useRef(new Animated.Value(0));

  if (!recipe) {
    return <RecipeDetailsSkeleton />;
  }

  const scale = scrollYRef.current.interpolate({
    inputRange: [-height, 0, 1],
    outputRange: [5, 1, 1],
    extrapolateLeft: 'clamp',
  });

  return (
    <View style={styles.detailsScreenContainer}>
      <Header scrollYRef={scrollYRef} />
      <Animated.Image
        source={{uri: recipe.image}}
        style={[styles.image, {transform: [{scale}]}]}
      />

      <Animated.ScrollView
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
        )}>
        <View style={styles.contentContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>{recipe.title}</Text>
            <TimeCounter time={recipe.time} />
          </View>
          <Text style={styles.description}>{recipe.description}</Text>
          <KcalCounter recipe={recipe} />
          <Toggle
            items={['Ingredients', 'Instructions']}
            activeItem={activeSection}
            onChange={onTogglePress}
          />
        </View>
        {activeSection === 'Ingredients' && (
          <IngredientsList ingredients={recipe.ingredients} />
        )}
        {activeSection === 'Instructions' && (
          <InstructionsList instructions={recipe.instructions} />
        )}
      </Animated.ScrollView>
    </View>
  );
}
