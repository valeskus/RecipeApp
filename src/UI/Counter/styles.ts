import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';

export const styles = StyleSheet.create({
  buttonContent: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
  },
  button: {
    borderRadius: 50,
    width: 25,
    height: 25,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {width: 0, height: 0},
    elevation: 8,
    position: 'relative',
  },
  counterContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 20,
    color: Colors.primary,
    marginHorizontal: 15,
    fontWeight: '600',
  },
});
