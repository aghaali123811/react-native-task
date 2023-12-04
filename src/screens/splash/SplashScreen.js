import React, {useEffect} from 'react';
import {Image, Platform, View} from 'react-native';
import styles from './styles';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
        props.navigation.replace('HomeScreen');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      {/* <SvgUri style={styles.img} source={ImagePath.splashImg} /> */}
    </View>
  );
}

export default SplashScreen;
