/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, ActivityIndicator, Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {GUI_colors, GUI_styles} from '../styles/STYLESMain';
import {Icon} from '@rneui/themed';

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

export class UIFullScreenMessage extends Component {
  render() {
    return (
      <View
        style={{
          height: Dimensions.get('window').height - 400,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 30,
        }}>
        <View>
          <Icon
            name={this.props.icon.name}
            type={this.props.icon.type}
            color={GUI_colors.COLOR_FONT_REGULAR}
            size={100}
          />
        </View>
        <View
          style={{
            marginVertical: 20,
          }}>
          <Text style={[GUI_styles.fontT1, {textAlign: 'center'}]}>
            {this.props.title}
          </Text>
        </View>
        <View>
          <Text style={[GUI_styles.fontPM, {textAlign: 'center'}]}>
            {this.props.message}
          </Text>
        </View>
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
