import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function CustomImage(props) {
  const {source, resizeMode} = props;
  return (
    <FastImage
      source={source}
      style={{...props.style}}
      tintColor={props.tintColor}
      resizeMode={resizeMode}
    />
  );
}
