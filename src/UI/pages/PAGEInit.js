import React, {Component} from 'react';
import {View, Image, Dimensions, Platform} from 'react-native';
import {ROUTERNavigation} from '../../Routes/ROUTERMain';
import {GUI_styles} from '../styles/STYLESMain';

export default class PAGEInit extends Component {
  constructor(props) {
    super(props);
    ROUTERNavigation.setNavigator(props.navigation);
  }

  //===================== LIFECICLES ===========================
  componentDidMount() {
    if (Platform.OS === 'android') {
      setTimeout(() => {
        this.props.navigation.navigate('home');
      }, 1000);
    } else {
      this.props.navigation.navigate('home');
    }
  }

  render() {
    return (
      <View style={GUI_styles.containerEC}>
        <Image
          source={require('../../assets/img/splash.png')}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
      </View>
    );
  }
}
