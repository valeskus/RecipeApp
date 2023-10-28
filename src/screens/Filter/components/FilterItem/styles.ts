import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { Fonts } from '@UI/Fonts';

export const styles = StyleSheet.create({
  filterScreenContainer: {
    flex: 1,
    padding: 10,
  },
  filterLabel: {
    fontSize: 20,
     fontFamily: Fonts.primary,
    fontWeight: '800',
    color: Colors.text,
  },
});
