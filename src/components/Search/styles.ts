import {StyleSheet} from 'react-native';
import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  searchBarContainer: {
    borderRadius: 20,
    width: 350,
    height: 50,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    elevation: 8,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-start',
    fontSize: 17,
    padding: 15,
    paddingRight: 50,
    margin: 10,
  },
  searchBarInput: {
    fontSize: 17,
    padding: 0,
    color: Colors.text,
    width: '100%',
  },
  searchBarIcon: {
    width: 27,
    height: 27,
  },
  searchBarIconContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  searchPress: {
    transform: [{scale: 0.9}],
  },
});
