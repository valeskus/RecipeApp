import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  timeContainer: {
    flex: 1,
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 40,
  },
  timeIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  time: {
    fontSize: 15,
    fontWeight: '600',
  },
});
