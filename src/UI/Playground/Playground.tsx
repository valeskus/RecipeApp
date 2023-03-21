import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from '../Button';

export const Playground: React.FC<{}> = () => {
  return (
    <SafeAreaView>
      <Button icon="like" onPress={() => {}} active={true} />
      <Button icon="carbs" onPress={() => {}} />
      <Button icon="menu" onPress={() => {}} active={true} />
    </SafeAreaView>
  );
};
