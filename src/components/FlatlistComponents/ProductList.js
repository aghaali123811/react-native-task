import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomImage from '../FastImage/CustomImage';
import ImagePath from '../../common/ImagePath';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';

export default function ProductList({
  favourite,
  onPressFavourite,
  onPressProduct,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressProduct}>
      <TouchableOpacity onPress={onPressFavourite}>
        <CustomImage
          source={favourite ? ImagePath.heartFilled : ImagePath.heart}
          style={styles.heart}
          resizeMode={FastImage.resizeMode.center}
        />
      </TouchableOpacity>
      <CustomImage
        source={ImagePath.thumbnail}
        tintColor={'rgba(161, 171, 192, 1)'}
        style={styles.placeHolder}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Text allowFontScaling={false} style={styles.price}>
        $2222
      </Text>
      <Text allowFontScaling={false} style={styles.title}>
        Title
      </Text>
      <TouchableOpacity style={styles.plusContainer}>
        <CustomImage
          source={ImagePath.plus}
          style={styles.plusImg}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: Colors.primaryGrey,
    height: 190,
    borderRadius: 14,
    marginRight: 10,
    marginTop: 30,
  },
  heart: {width: 20, height: 20, position: 'absolute', left: 15, top: 15},
  placeHolder: {
    width: 60,
    height: 60,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 30,
  },
  price: {
    fontFamily: Fonts.extraBold,
    fontSize: 14,
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    marginLeft: 20,
    marginTop: 5,
  },
  plusContainer: {
    width: 30,
    height: 30,
    backgroundColor: Colors.primaryBlue,
    borderRadius: 50,
    position: 'absolute',
    bottom: 45,
    right: 20,
  },
  plusImg: {width: 20, height: 20, alignSelf: 'center', marginTop: 5},
});
