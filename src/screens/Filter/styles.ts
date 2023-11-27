import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.background,
  },
  selectButtonContainer: {
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 10,
  },
  footerOffset: {
    backgroundColor: Colors.background,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    opacity: 0.7,
    zIndex: 5,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  filterList: {
    flex: 1,
  },
});
