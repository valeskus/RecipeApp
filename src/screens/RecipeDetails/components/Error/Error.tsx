import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {} from 'react-native-svg';
import {styles} from './styles';

export function Error(): JSX.Element {
  return (
    <SafeAreaView style={styles.errorContainer}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.message}>Error</Text>
    </SafeAreaView>
  );
}
