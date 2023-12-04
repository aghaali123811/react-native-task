import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomImage from '../FastImage/CustomImage';
import ImagePath from '../../common/ImagePath';
import Colors from '../../common/Colors';

export default function SearchBar({placeholder, onChangeText, value}) {
  return (
    <View style={styles.container}>
      <CustomImage
        source={ImagePath.search}
        style={styles.icon}
        resizeMode={FastImage.resizeMode.contain}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGrey}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 55,
    marginTop: 20,
    width: '90%',
    height: 60,
  },
  icon: {width: 20, height: 20, alignSelf: 'center', marginLeft: 20},
  input: {color: Colors.lightGrey, fontSize: 14, paddingLeft: 10},
});
