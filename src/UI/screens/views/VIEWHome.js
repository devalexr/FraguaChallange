/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import VControllerHome from '../controllers/VControllerHome';
import {GUI_colors} from '../../styles/STYLESMain';
import {Icon} from '@rneui/themed';
import VIEWPagination from './VIEWPagination';
import {UNPhotoItem} from '../../components/views/UNPhotoItem';
import {Pressable, View} from 'react-native';
import {Image} from '@rneui/base';

export default class VIEWHome extends VIEWPagination {
  VController = VControllerHome;

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
        onPressLikeButton={itemId => {
          this.VController.onPressLikeButton(itemId);
        }}
      />
    );
  }

  renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 14,
        }}>
        <View
          style={{
            flex: 10,
          }}>
          <Image
            style={{
              height: 48,
              width: 213,
            }}
            source={require('../../../assets/img/logo-header.png')}
          />
        </View>
        <Pressable
          onPress={() => {
            this.VController.onPressSearchBotton();
          }}
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="search-outline"
            type="ionicon"
            color={GUI_colors.COLOR_PRIMARY}
            size={40}
          />
        </Pressable>
      </View>
    );
  }
}
