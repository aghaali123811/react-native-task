import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomImage from '../FastImage/CustomImage';
import ImagePath from '../../common/ImagePath';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';

export default function SliderImageComponent({}) {
  return (
    <View style={styles.sliderWrapper}>
      <CustomImage
        source={ImagePath.thumbnail}
        style={styles.thumbnail}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <View>
        <Text allowFontScaling={false} style={styles.get}>
          Get
        </Text>
        <Text allowFontScaling={false} style={styles.discount}>
          50% OFF
        </Text>
        <Text allowFontScaling={false} style={styles.orders}>
          on first 3 orders
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderWrapper: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    backgroundColor: Colors.yellow,
    borderRadius: 16,
    marginTop: 20,
  },
  thumbnail: {width: 80, height: 80, borderRadius: 16, margin: 30},
  get: {
    color: Colors.primaryGrey,
    fontFamily: Fonts.regular,
    fontSize: 22,
    marginTop: 25,
  },
  discount: {
    color: Colors.primaryGrey,
    fontFamily: Fonts.extraBold,
    fontSize: 22,
  },
  orders: {color: Colors.primaryGrey, fontFamily: Fonts.regular, fontSize: 16},
});
