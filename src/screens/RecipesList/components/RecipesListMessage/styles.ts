import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { Fonts } from '@UI/Fonts';

export const styles = StyleSheet.create({
  textMessageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  textMessage: {
    textAlign: 'center',
    fontSize: 15,
    color: Colors.text,
    fontWeight: '500',
  fontFamily: Fonts.secondary,
  },
  textMessageAccent: {
    fontSize: 18,
    marginBottom: 5,
    color: Colors.accent,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 10,
    fontWeight: '700',
     fontFamily: Fonts.primary,
  },
});
