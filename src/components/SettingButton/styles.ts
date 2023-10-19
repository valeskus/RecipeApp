import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonPressed: {
    transform: [{ scale: 0.9 }],
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  button: {
    width: 30,
    height: 30,
    top: 3,
    right: 5,
  },
});
