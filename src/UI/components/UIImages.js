/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {GUI_colors} from '../styles/STYLESMain';

export class UIImageLoading extends Component {
  state = {
    loading: true,
  };

  render() {
    return (
      <View>
        <AutoHeightImage
          width={this.props.width}
          source={this.props.source}
          style={this.props.style}
          onLoadStart={() => {
            this.setState({
              loading: true,
            });
          }}
          onLoadEnd={() => {
            this.setState({
              loading: false,
            });
          }}
        />
        {this.state.loading && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: this.props.height,
            }}>
            <ActivityIndicator color={GUI_colors.COLOR_PRIMARY} size="small" />
          </View>
        )}
      </View>
    );
  }
}
