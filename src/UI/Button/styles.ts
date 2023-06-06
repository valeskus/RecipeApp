import { StyleSheet } from 'react-native';

import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  buttonImage: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    justifyContent: 'center',
    position: 'relative',
    margin: 8,
  },
  buttonActive: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    position: 'absolute',
  },
  buttonPressed: {
    transform: [{ scale: 0.9 }],
  },
});
