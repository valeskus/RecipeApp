import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  headerTitle: {
    color: Colors.primary,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },

  buttonPressed: {
    transform: [{ scale: 0.9 }],
  },

  buttonImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },

  button: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    position: 'absolute',
    left: 10,
    zIndex: 10,
  },

  headerRightContainer: {
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    zIndex: 1,
  },

  headerLeftContainer: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
});
