import React from 'react';
import {Platform, SafeAreaView, StyleSheet, UIManager} from 'react-native';
import {Button} from './UI/Button';

import * as CategoriesStore from './stores/categories';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function App(): JSX.Element {
  const [isLoading, setLoading] = React.useState(false);

  const categories = CategoriesStore.useCategoriesStore();

  const getCategories = CategoriesStore.useGetCategories();

  React.useEffect(() => {
    setLoading(true);

    getCategories().then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (isLoading) {
  //   return <Loader />
  // }

  return (
    <SafeAreaView>
      <Button icon="like" onPress={() => {}} active={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
