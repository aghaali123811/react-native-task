import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

import SimpleHeader from '../../components/Header/SimpleHeader';
import Header from '../../components/Header/Header';

export default function CartScreen(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{padding: 20}}>
        <Header
          onPressBack={() => props.navigation.goBack()}
          onPressCart={() => console.log('')}
        />

  
      </View>
    </ScrollView>
  );
}
