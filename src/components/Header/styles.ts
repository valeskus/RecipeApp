import {StyleSheet} from 'react-native';
import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.primary,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 5,

    flex: 1,
  },

  buttonPressed: {
    transform: [{scale: 0.9}],
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  button: {
    width: 25,
    height: 25,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 5,
    left: 10,
    zIndex: 10,
  },
});
