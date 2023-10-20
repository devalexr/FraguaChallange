import React, {Component} from 'react';
import {View, Text, BackHandler, Platform, Image} from 'react-native';
import {ROUTERNavigation} from '../../Routes/ROUTERMain';

export default class PAGEInit extends Component {
  constructor(props) {
    super(props);
    ROUTERNavigation.setNavigator(props.navigation);
  }

  //===================== LIFECICLES ===========================
  componentDidMount() {
    this.props.navigation.navigate('home');
  }

  render() {
    return <Text>Cargando....</Text>;
  }
}
