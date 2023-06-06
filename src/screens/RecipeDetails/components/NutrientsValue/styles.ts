import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  nutrientValuesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  nutrientValue: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  dotIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
});
