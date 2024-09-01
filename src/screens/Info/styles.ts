import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: Colors.background,
  },
  textContainer: {
    marginBottom: 25,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: Colors.text,
  },
  link: {
    color: Colors.primary,
    fontFamily: 'Montserrat-Medium',
  },
  accent: {
    color: Colors.accent,
    fontFamily: 'Montserrat-Semibold',
  },

});
