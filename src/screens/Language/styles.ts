import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: Colors.background,
    flexDirection: 'column',
  },
  buttonImage: {
    width: '60%',
    height: '60%',
  },
  label: {
    margin: 10,
    fontSize: 21,
    fontFamily: 'Nunito-Bold',
    color: Colors.text,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    marginLeft: 15,
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: Colors.text,
  },
  active: {
    color: Colors.primary,
  },
});
