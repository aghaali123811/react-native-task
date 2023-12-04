import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Colors from '../../../common/Colors';
import ImagePath from '../../../common/ImagePath';
import Fonts from '../../../common/Fonts';
import CustomImage from '../../FastImage/CustomImage';
import FastImage from 'react-native-fast-image';
import SearchBar from '../../SearchInput/SearchInput';

export default function HeaderContainer({ navigation}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Text allowFontScaling={false} style={styles.name}>Hey, Rahul</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('CartScreen')}>
        <CustomImage source={ImagePath.cart} resizeMode={FastImage.resizeMode.contain} style={styles.cartImage} />
        </TouchableOpacity>
      </View>

      <SearchBar placeholder={'Search Products or store'} value={''} onChangeText={() => console.log('')} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginTop: 20 }}>
        <View>
          <Text allowFontScaling={false} style={{ color: Colors.primaryGrey, fontFamily: Fonts.regular }}>Delivery to</Text>
        </View>
        <View>
          <Text allowFontScaling={false} style={{ color: Colors.primaryGrey, fontFamily: Fonts.regular }}>Within</Text>
        </View>
      </View>

    </View>
  )
};


const styles = StyleSheet.create({
  wrapper: { width: '100%', height: 300, backgroundColor: Colors.primaryBlue },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { color: Colors.primaryGrey, fontSize: 22, fontFamily: Fonts.bold, margin: 20 },
  cartImage: { width: 20, height: 20, alignSelf: 'center', marginRight: 20,marginTop:25 }
});