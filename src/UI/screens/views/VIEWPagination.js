/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
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
              //return this.renderEmptyLIST();
            }}
            contentContainerStyle={
              this.state.data?.length > 0 ? {} : {flex: 12}
            }
            onScrollEndDrag={e => {}}
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
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={GUI_colors.COLOR_PRIMARY} />
        </View>
      );
    } else {
      return null;
    }
  }

  renderHeader() {
    return null;
  }
}
