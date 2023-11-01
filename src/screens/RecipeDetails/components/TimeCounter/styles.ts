import { StyleSheet } from 'react-native';

import { Fonts } from '@UI/Fonts';
import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  timeContainer: {
    flex: 1,
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  timeIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  time: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: Fonts.secondary,
    color: Colors.text,
  },
});
