import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { normalize } from '@UI/normalize';

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 10,
    width: '100%',
    height: normalize(60),
    alignItems: 'flex-end',
  },

  headerWrapper: {
    backgroundColor: Colors.shadow,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: '100%',
    opacity: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },

  buttonImage: {
    position: 'absolute',
    left: normalize(11),
    top: normalize(12),
  },
});
