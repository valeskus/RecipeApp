import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from './src/UI/Button';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Button icon="like" onPress={() => {}} active={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
