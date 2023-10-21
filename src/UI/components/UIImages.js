/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {GUI_colors, GUI_styles} from '../styles/STYLESMain';

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

export class UILoadingLarge extends Component {
  render() {
    return (
      <View
        style={[
          GUI_styles.containerEC,
          {
            backgroundColor: this.props.color
              ? this.props.color
              : GUI_styles.containerEC.backgroundColor,
          },
        ]}>
        <ActivityIndicator size="large" color={GUI_colors.COLOR_PRIMARY} />
        {this.props?.title && (
          <Text style={[GUI_styles.fontBR, {fontSize: 12, marginTop: 10}]}>
            {this.props.title}
          </Text>
        )}
      </View>
    );
  }
}
