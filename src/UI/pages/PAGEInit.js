/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {ROUTERNavigation} from '../../Routes/ROUTERMain';
import {UILoadingLarge} from '../components/UIImages';
import {GUI_colors} from '../styles/STYLESMain';

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
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: GUI_colors.COLOR_BACKGROUND_GRAY,
        }}>
        <UILoadingLarge />
      </View>
    );
  }
}
