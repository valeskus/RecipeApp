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
    flexShrink: 1,
    color: Colors.text,
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
});
