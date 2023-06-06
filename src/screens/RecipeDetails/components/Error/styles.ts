import {StyleSheet} from 'react-native';
import {Colors} from '../../../../UI/Colors';

export const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 18,
    color: Colors.secondary,
    fontWeight: '600',
  },
  title: {
    fontSize: 27,
    color: Colors.accent,
    marginBottom: 10,
    fontWeight: '600',
  },
  message: {
    fontSize: 18,
    color: Colors.primary,
    marginBottom: 20,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    transform: [{scale: 0.9}],
  },
  icon: {
    width: 70,
    height: 70,
    marginBottom: 20,
  },
  button: {
    borderRadius: 15,
    padding: 15,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    elevation: 8,
    justifyContent: 'center',
  },
});
