import React from 'react';
import { View, Text, Image } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

export function RecipesListMessage(): JSX.Element {
  return (
    <View style={styles.textMessageContainer}>
      <Image source={Icons.errorRecipe} style={styles.icon} />
      <Text style={[styles.textMessage, styles.textMessageAccent]}>
        0 results found for your search.
      </Text>
      <Text style={styles.textMessage}>Please try another search term</Text>
    </View>
  );
}
