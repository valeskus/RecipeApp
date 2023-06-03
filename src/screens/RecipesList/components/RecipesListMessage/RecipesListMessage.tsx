import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function RecipesListMessage(): JSX.Element {
  return (
    <View style={styles.textMessageContainer}>
      <Text style={[styles.textMessage, styles.textMessageAccent]}>
        0 results found for your search.
      </Text>
      <Text style={styles.textMessage}>Please try another search term</Text>
    </View>
  );
}
