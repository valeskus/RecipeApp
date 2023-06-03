import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  categoriesScreenContainer: {
    flex: 1,
    paddingHorizontal: 10,

    flexDirection: 'column',
    backgroundColor: Colors.background,
  },
  searchContainer: {
    width: '100%',
    zIndex: 10,
    alignItems: 'center',
  },
  blurContainer: {
    width: '100%',
    height: 80,
    marginTop: -80,
    backgroundColor: 'white',
    opacity: 0.93,
    zIndex: 5,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
});
