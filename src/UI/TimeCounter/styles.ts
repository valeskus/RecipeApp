import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  timeContainerContainer: {
    width: '100%',
  },

  timeContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  timeIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  time: {
    fontSize: 15,
    fontFamily: 'Montserrat-Semibold',
    color: Colors.text,
  },
});
