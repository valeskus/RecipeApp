import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  recipesScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.background,
  },
  loadingIndicator: {
    flex: 1,
  },
  searchMenuContainer: {
    width: '100%',
    flexDirection: 'column',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    zIndex: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  blurContainer: {
    width: '100%',
    height: 80,
    marginTop: -80,
    backgroundColor: Colors.background,
    opacity: 0.93,
    zIndex: 5,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
});
