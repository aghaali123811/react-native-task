import React from 'react';
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
import CustomImage from '../FastImage/CustomImage';
import ImagePath from '../../common/ImagePath';
import FastImage from 'react-native-fast-image';
import Fonts from '../../common/Fonts';

export default function Header({onPressBack, onPressCart}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={onPressBack}>
        <CustomImage
          source={ImagePath.back}
          style={styles.backIcon}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </TouchableOpacity>
    <Text style={{marginLeft:20,color:Colors.black,fontFamily:Fonts.bold,marginTop:5,fontSize:16}}>Shopping Cart (5)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  backContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.lightGrey,
    borderRadius: 50,
  },
  backIcon: {width: 10, height: 15, alignSelf: 'center', marginTop: 12},
  cartIcon: {width: 20, height: 20, alignSelf: 'center'},
});
