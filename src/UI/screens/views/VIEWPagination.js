/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {GUI_colors} from '../../styles/STYLESMain';
import {UILoadingLarge} from '../../components/UIImages';

export default class VIEWPagination extends Component {
  render() {
    if (!this.state.loading) {
      return (
        <View>
          {this.renderHeader()}
          <FlatList
            data={this.state.data}
            bounces={false}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={item => {
              item = item.item;
              return this.renderItem(item);
            }}
            onEndReached={() => {
              this.VController.onLoadMore();
            }}
            ListFooterComponent={() => {
              return this.renderLoadingFooter();
            }}
            ListEmptyComponent={() => {
              return this.renderEmpty();
            }}
            contentContainerStyle={
              this.state.data?.length > 0 ? {} : {flex: 12}
            }
            ListFooterComponentStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 80,
            }}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: GUI_colors.COLOR_BACKGROUND_GRAY,
          }}>
          {this.renderHeader()}
          <UILoadingLarge />
        </View>
      );
    }
  }

  renderLoadingFooter() {
    if (this.state.loadingMore) {
      return (
        <View
          style={{
            height: 80,
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator
            style={{marginTop: -80}}
            size="large"
            color={GUI_colors.COLOR_PRIMARY}
          />
        </View>
      );
    } else {
      return null;
    }
  }

  renderEmpty() {
    return null;
  }

  renderHeader() {
    return null;
  }
}
