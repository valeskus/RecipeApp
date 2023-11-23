import { Platform, StatusBar, StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { normalize } from '@UI/normalize';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    position: 'relative',
  },

  headerDefaultOffset: {
    paddingTop: Platform.OS === 'ios' ? 15 : (StatusBar.currentHeight || 15),
  },

  headerTitle: {
    color: Colors.primary,
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Nunito-Black',
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
    zIndex: 10,
    marginLeft: 10,
  },

  headerRightContainer: {
    justifyContent: 'center',
    marginRight: 10,
    width: normalize(25),
    height: normalize(25),
    zIndex: 1,
  },

  snowflakesContainer: {
    width: '100%',
    paddingHorizontal: 20,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    bottom: 0,
  },
});
