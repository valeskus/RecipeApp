import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { Fonts } from '@UI/Fonts';

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
    fontFamily: Fonts.primary,
    fontWeight: '700',
    color: Colors.text,
  },
});
