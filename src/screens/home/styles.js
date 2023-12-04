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
  header: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    color: Colors.black,
    marginTop: 20,
    marginBottom: 10,
  },
});
