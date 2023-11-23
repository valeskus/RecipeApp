import { StyleSheet } from 'react-native';

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
    paddingHorizontal: 5,
    paddingVertical: 10,
    minHeight: normalize(55),
  },
  dotIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Montserrat-Semibold',
    flexShrink: 1,
    color: Colors.text,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
});
