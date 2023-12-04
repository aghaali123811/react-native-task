import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

export default function OutlineButton(props) {
  const {onPress,label} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text allowFontScaling={false} style={styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '49%',
    height: 60,
    borderColor: Colors.darkBlue,
    borderWidth: 1,
    borderRadius: 20,
  },
  label: {
    fontFamily: Fonts.regular,
    color: Colors.darkBlue,
    fontSize: 16,
    marginTop: 15,
    alignSelf: 'center',
  },
});
