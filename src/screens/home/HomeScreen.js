import React, { useRef } from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import HeaderContainer from '../../components/pureComponents/HeaderContainer/HeaderContainer';
import ImageSlider from '../../components/pureComponents/Slider/ImageSlider';
import ProductList from '../../components/FlatlistComponents/ProductList';

const ScreenWidth = Dimensions.get('window').width;
const sliderItemWidth = Dimensions.get('window').width - 80;

export default function HomeScreen(props) {
  const { navigation } = props;
  const carouselRef = useRef(null);

  const [favourite,setFavourite] = React.useState(true)
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <HeaderContainer {...props} />
      <ImageSlider carouselRef={carouselRef} ScreenWidth={ScreenWidth} sliderItemWidth={sliderItemWidth} />





      <FlatList
        data={['', '', '', '', '', '', '', '', '']}
        numColumns={2}
        style={{ paddingHorizontal: 20 }}
        renderItem={({ item, index }) => (
          <ProductList {...item} favourite={favourite} onPressFavourite={() => setFavourite(!favourite)} onPressProduct={()=>props.navigation.navigate('ProductDetailScreen')}/>
        )}
        scrollEnabled={true}
        ListHeaderComponent={<Text allowFontScaling={false} style={styles.header}>Recommended</Text>}
        keyExtractor={(item) => item.productId}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}
