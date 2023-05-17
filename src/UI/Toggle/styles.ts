import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';

export const styles = StyleSheet.create({
  selectContainer: {
    backgroundColor: Colors.tertiary,
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 15,
    alignItems: 'center',
  },
  selectButton: {
    flex: 1,
    paddingVertical: 10,
  },
  selectItemActive: {
    backgroundColor: Colors.secondary,
    width: '50%',
    borderRadius: 15,
    zIndex: 10,
    paddingVertical: 20,
  },
  selectItem: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex: 10,
  },
  selectItemTitle: {
    flex: 1,
    alignSelf: 'center',
  },
  activeTitle: {
    color: Colors.background,
  },
  moveRight: {
    alignSelf: 'flex-end',
  },
  activeItemWrap: {
    width: '100%',
    position: 'absolute',
  },
});
