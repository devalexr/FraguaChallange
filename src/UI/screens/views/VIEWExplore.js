import React, {Component} from 'react';
import {Text} from 'react-native';
import UNSPLASHService from '../../../Services/Unsplash/UNSPLASHService';
export default class VIEWExplore extends Component {

  componentDidMount() {
    UNSPLASHService.getPhotos();
  }

  render() {
    return <Text>VIEWExplore</Text>;
  }
}
