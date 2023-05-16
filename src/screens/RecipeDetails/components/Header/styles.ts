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
});
