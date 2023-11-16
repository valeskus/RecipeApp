import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

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
    height: 450,
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
  description: {
    marginBottom: 20,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: Colors.text,
  },
});
