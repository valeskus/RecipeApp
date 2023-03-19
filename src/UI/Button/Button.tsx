import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import {Colors} from '../Colors';
import {Icons} from '../Icons';

export type Props = {
  icon: ImageSourcePropType;
  onPress: () => {};
  active?: boolean;
};

export function Button({icon, onPress, active}: Props): JSX.Element {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>
        <Image source={icon} style={styles.buttonImage} />
        {active ? (
          <Image source={Icons.active} style={styles.buttonActive} />
        ) : null}
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  buttonImage: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  button: {
    padding: 20,
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    position: 'relative',
  },
  buttonActive: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
  },
});
