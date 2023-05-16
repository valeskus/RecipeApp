import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  detailsScreenContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: 80,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  contentContainer: {
    marginTop: -70,
  },
  topContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    flex: 1,
  },
});
