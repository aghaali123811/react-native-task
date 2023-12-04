import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import ImagePath from '../../common/ImagePath';
import CustomImage from '../../components/FastImage/CustomImage';
import StarRatings from '../../components/StarRating/StarRating';
import OutlineButton from '../../components/Buttons/OutlineButton';
import Button from '../../components/Buttons/Button';
import SimpleHeader from '../../components/Header/SimpleHeader';

export default function ProductDetailScreen(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{padding: 20}}>
        <SimpleHeader
          onPressBack={() => props.navigation.goBack()}
          onPressCart={() => console.log('')}
        />

        <Text allowFontScaling={false} style={styles.heading}>
          Thin Choise
        </Text>
        <Text allowFontScaling={false} style={styles.heading1}>
          Top Orange
        </Text>

        <StarRatings reviews={110} />

        <View style={styles.imageContainer}>
          <CustomImage
            source={ImagePath.thumbnail}
            tintColor={'rgba(161, 171, 192, 1)'}
            style={styles.thumbnail}
            resizeMode={FastImage.resizeMode.stretch}
          />

          <TouchableOpacity style={styles.favContainer}>
            <CustomImage
              source={ImagePath.heart}
              style={styles.heartIcon}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.priceContainer}>
          <Text allowFontScaling={false} style={styles.price}>
            $34.70/KG
          </Text>
          <View style={styles.priceWrapper}>
            <Text allowFontScaling={false} style={styles.priceOff}>
              $22.04 OFF
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <OutlineButton
            label={'Add To Cart'}
            onPress={() => console.log('')}
          />

          <Button label={'Buy Now'} onPress={() => console.log('')} />
        </View>

        <View>
          <Text allowFontScaling={false} style={styles.detail}>
            Details
          </Text>
          <Text allowFontScaling={false} style={styles.detailTxt}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam quis risus eget urna mollis ornare vel eu leo.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
