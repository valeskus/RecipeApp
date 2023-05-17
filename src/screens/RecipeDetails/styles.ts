import {StyleSheet} from 'react-native';
import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  detailsScreenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    position: 'relative',
  },
  detailsScreen: {
    flex: 1,
    zIndex: 5,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 1,
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: 80,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  contentContainer: {
    zIndex: 10,
    marginTop: 320,
    backgroundColor: 'white',
    borderTopRightRadius: 80,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    flex: 1,
  },
  description: {
    marginBottom: 20,
  },
});
