import {StyleSheet} from 'react-native';
import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.background,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.primary,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  buttonPressed: {
    transform: [{scale: 0.9}],
  },
  buttonImage: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
