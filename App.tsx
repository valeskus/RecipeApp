import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from './src/components/Button';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Button
        icon={require('./assets/menu.png')}
        onPress={() => {
          return 1;
        }}
        active={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
