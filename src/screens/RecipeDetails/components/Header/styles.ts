import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    flexDirection: 'row',
    // paddingTop: 40,
    zIndex: 10,
    height: 115,
    width: '100%',
  },
  headerWrapper: {
    backgroundColor: Colors.shadow,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 115,
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
});
