import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
import CustomImage from '../FastImage/CustomImage';
import ImagePath from '../../common/ImagePath';
import FastImage from 'react-native-fast-image';

export default function SimpleHeader({onPressBack, onPressCart}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={onPressBack}>
        <CustomImage
          source={ImagePath.back}
          style={styles.backIcon}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressCart}>
        <CustomImage
          source={ImagePath.cart}
          style={styles.cartIcon}
          tintColor={Colors.black}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.yellow,
    borderRadius: 50,
  },
  backIcon: {width: 10, height: 15, alignSelf: 'center', marginTop: 12},
  cartIcon: {width: 20, height: 20, alignSelf: 'center'},
});
