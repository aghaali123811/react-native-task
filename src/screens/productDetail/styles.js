import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primaryBG,
  },
  heading: {fontSize: 50, color: Colors.black, fontFamily: Fonts.regular},
  heading1: {fontSize: 50, color: Colors.black, fontFamily: Fonts.extraBold},
  imageContainer: {
    width: '100%',
    height: 230,
    backgroundColor: Colors.primaryGrey,
    marginTop: 25,
  },
  thumbnail: {width: 60, height: 60, alignSelf: 'center', marginTop: 85},
  favContainer: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: Colors.black,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  heartIcon: {width: 22, height: 22, alignSelf: 'center', marginTop: 15},
  priceContainer: {flexDirection: 'row', marginTop: 25},
  price: {fontFamily: Fonts.extraBold, color: Colors.darkBlue, fontSize: 16},
  priceWrapper: {
    width: 100,
    backgroundColor: Colors.primaryBlue,
    borderRadius: 12,
    marginLeft: 10,
  },
  priceOff: {
    color: Colors.white,
    alignSelf: 'center',
    fontSize: 12,
    marginTop: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  detail: {
    fontFamily: Fonts.regular,
    color: Colors.darkBlue,
    fontSize: 16,
    marginTop: 25,
  },
  detailTxt: {
    fontFamily: Fonts.regular,
    color: Colors.lightGrey,
    fontSize: 16,
    marginTop: 10,
  },
});
