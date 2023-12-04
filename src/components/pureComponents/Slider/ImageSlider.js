import React from 'react';
import {StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SliderImageComponent from '../../FlatlistComponents/SliderImageComponent';

export default function ImageSlider({
  carouselRef,
  ScreenWidth,
  sliderItemWidth,
}) {
  return (
    <Carousel
      layout={'default'}
      ref={carouselRef}
      data={['', '', '']}
      renderItem={({item, index}) => <SliderImageComponent {...item} />}
      sliderWidth={ScreenWidth}
      itemWidth={sliderItemWidth}
    />
  );
}

const styles = StyleSheet.create({});
