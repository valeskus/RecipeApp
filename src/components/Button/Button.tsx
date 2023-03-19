import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

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
          <Image
            source={require('../../../assets/active.png')}
            style={styles.buttonActive}
          />
        ) : null}
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  buttonImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  button: {
    padding: 20,
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: 'white',
    shadowColor: 'rgba(148,146,171,1)',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    position: 'relative',
  },
  buttonActive: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    position: 'absolute',
  },
});
