import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  detailsScreenContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {},
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
  timeContainer: {
    width: 50,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  timeIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
