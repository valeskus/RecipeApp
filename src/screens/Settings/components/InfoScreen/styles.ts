import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { normalize } from '@UI/normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: Colors.background,
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: Colors.text,
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
    alignSelf: 'flex-start',
},

  link: {
    color: Colors.primary,
    fontFamily: 'Montserrat-Medium',
  },

});
