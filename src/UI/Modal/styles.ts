import {StyleSheet} from 'react-native';
import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.background,
  },
  goBackButton: {
    alignItems: 'flex-end',
  },
  wrapper: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 65,
    opacity: 0.8,
    zIndex: 5,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingHorizontal: '15%',
  },
  selectButtonContainer: {
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  headerContainer: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'baseline',
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
    width: '50%',
    height: '50%',
    alignSelf: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    margin: 8,
  },
});
