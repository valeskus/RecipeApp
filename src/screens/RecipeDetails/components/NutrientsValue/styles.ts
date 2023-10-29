import { StyleSheet } from 'react-native';

import { Fonts } from '@UI/Fonts';
import { normalize } from '@UI/normalize';

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
    fontFamily: Fonts.secondary,
    fontWeight: '600',
    flexShrink: 1,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
});
