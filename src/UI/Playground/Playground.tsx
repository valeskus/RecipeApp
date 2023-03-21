import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '../Button';
import {CategoryCard} from '../CategoryCard';

export const Playground: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.PlaygroundContainer}>
      <Button icon="like" onPress={() => {}} active={true} />
      <Button icon="carbs" onPress={() => {}} />
      <Button icon="menu" onPress={() => {}} active={true} />
      <CategoryCard title="Breacfast" onPress={() => {}} />
      <CategoryCard title="Lunch" onPress={() => {}} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  PlaygroundContainer: {
    flex: 1,
  },
});
