import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

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
  },
  textMessageAccent: {
    fontSize: 18,
    marginBottom: 5,
    color: Colors.accent,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
