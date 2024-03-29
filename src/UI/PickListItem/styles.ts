import { StyleSheet } from 'react-native';

import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  pickListItemContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  pick: {
    borderRadius: 5,
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: Colors.borderTextSecondary,
    justifyContent: 'center',
    position: 'relative',
  },

  pickActive: {
    width: '80%',
    height: '80%',
    alignSelf: 'center',
    position: 'absolute',
  },

  pickListItem: {
    color: Colors.text,
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
  },
});
