import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.background,
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
});
