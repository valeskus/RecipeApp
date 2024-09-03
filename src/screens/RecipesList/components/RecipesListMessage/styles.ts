import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  textMessageContainer: {
    marginTop: 50,
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  textMessage: {
    textAlign: 'center',
    fontSize: 15,
    color: Colors.text,
    fontFamily: 'Montserrat-Medium',
  },
  textMessageAccent: {
    fontSize: 18,
    color: Colors.accent,
    marginBottom: 10,
    fontFamily: 'Nunito-Bold',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
