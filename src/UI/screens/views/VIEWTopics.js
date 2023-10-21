import React from 'react';
import {Text} from 'react-native';
import VIEWPagination from './VIEWPagination';
import VControllerTopics from '../controllers/VControllerTopics';
export default class VIEWExplore extends VIEWPagination {
  VController = VControllerTopics;

  constructor(props) {
    super(props);
    this.VController.setView(this);
  }

  renderItem(item) {
    return <Text>jajaj</Text>;
  }
}
