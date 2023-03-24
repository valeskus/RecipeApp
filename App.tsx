import React from 'react';
import {Platform, SafeAreaView, StyleSheet, UIManager} from 'react-native';
import {Button} from './src/UI/Button';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Button icon="like" onPress={() => {}} active={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
