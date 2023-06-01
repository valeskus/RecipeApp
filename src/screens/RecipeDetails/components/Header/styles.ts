import {StyleSheet} from 'react-native';
import {Colors} from '../../../../UI/Colors';

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 10,
    top: 40,
  },
  headerWraper: {
    backgroundColor: Colors.shadow,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: 115,
    opacity: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
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
