import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 10,
    top: 50,
  },
  headerRightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerLeftButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
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
  },
  contentContainer: {
    marginTop: -70,
  },
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
