import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../../common/Colors';
import StarRating from 'react-native-star-rating';
import Fonts from '../../common/Fonts';

export default function StarRatings({reviews}) {
  return (
    <View style={styles.container}>
      <StarRating
        marginTop={5}
        maxRating={5}
        rating={3}
        fullStarColor={Colors.yellow}
        emptyStarColor={Colors.black}
        starSize={20}
        disabled={true}
        containerStyle={styles.starRating}
      />
      <Text allowFontScaling={false} style={styles.label}>
        {reviews} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  starRating: {width: 120, marginTop: 20},
  label: {
    fontFamily: Fonts.regular,
    alignSelf: 'center',
    marginTop: 18,
    marginLeft: 10,
  },
});
