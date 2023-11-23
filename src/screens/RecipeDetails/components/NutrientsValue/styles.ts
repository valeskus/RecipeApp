import { Platform, StyleSheet } from 'react-native';

import { normalize } from '@UI/normalize';
import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  nutrientValuesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  nutrientValue: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    minHeight: normalize(55),
    margin: 1,
  },
  dotIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Montserrat-Semibold',
    flex: 1,
    color: Colors.text,
    height: Platform.OS === 'ios' ? 'auto' : normalize(40),
    textAlignVertical: 'center',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
});
