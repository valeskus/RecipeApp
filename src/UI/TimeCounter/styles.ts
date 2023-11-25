import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { normalize } from '@UI/normalize';

export const styles = StyleSheet.create({
  timeContainerContainer: {
    width: '100%',
  },

  timeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  timeIcon: {
    width: normalize(17),
    height: normalize(17),
    marginRight: 3,
  },
  time: {
    color: Colors.text,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
});
