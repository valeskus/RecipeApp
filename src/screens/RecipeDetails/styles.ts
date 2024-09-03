import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { normalize } from '@UI/normalize';

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
  imageContainer: {
    width: '100%',
    height: 450,
    position: 'absolute',
    zIndex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
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
    paddingHorizontal: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Nunito-Bold',
    flex: 2,
    flexWrap: 'wrap',
    color: Colors.text,
  },
  timeContainer: {
    top: normalize(10),
  },
  description: {
    marginBottom: 20,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: Colors.text,
  },
});
