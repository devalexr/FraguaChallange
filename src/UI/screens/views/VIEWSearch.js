import React, {Component} from 'react';
import {Text} from 'react-native';
import VIEWPagination from './VIEWPagination';
import VControllerSearch from '../controllers/VControllerSearch';
import {UNPhotoItem} from '../../components/views/UNPhotoItem';
export default class VIEWSearch extends VIEWPagination {
  VController = VControllerSearch;

  constructor(props) {
    super(props);
    this.VController.setView(this);
  }

  renderItem(item) {
    return (
      <UNPhotoItem
        item={item}
        onPress={() => {
          this.VController.onPressItem(item);
        }}
        onPressUser={username => {
          this.VController.onPressUser(item.user.name);
        }}
        onPressLikeButtom={itemId => {
          this.VController.onPressLikeButtom(itemId);
        }}
      />
    );
  }
}
