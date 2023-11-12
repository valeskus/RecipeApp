import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { Fonts } from '@UI/Fonts';
import { normalize } from '@UI/normalize';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  headerTitle: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    fontFamily: Fonts.primary,
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

  leftButton: {
    width: normalize(25),
    height: normalize(25),
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

  snowflakesContainer: {
    width: '100%',
    paddingHorizontal: 20,
    height: 70,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 0,
  },
});
