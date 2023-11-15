import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { normalize } from '@UI/normalize';

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 10,
    width: '100%',
  },
  headerWrapper: {
    backgroundColor: Colors.shadow,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: normalize(115),
    opacity: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  headerRightButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  headerLeftButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  buttonImage: {
    position: 'absolute',
    left: normalize(11),
    top: normalize(12),
  },
});
