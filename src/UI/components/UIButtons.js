/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Icon, Button} from '@rneui/themed';
import {GUI_styles} from '../styles/STYLESMain';

export class UIButtonLarge extends Component {
  render() {
    return (
      <Button
        title={this.props.title}
        type="solid"
        containerStyle={{
          width: '100%',
        }}
        titleStyle={[
          GUI_styles.fontBold,
          {color: 'white', fontSize: 18, marginHorizontal: 20},
        ]}
        buttonStyle={GUI_styles.BTNLarge}
        onPress={() => {
          this.props.onPress();
        }}
        icon={
          this.props?.icon ? (
            <Icon
              name={this.props.icon.name}
              type={this.props.icon.type}
              color="white"
            />
          ) : null
        }
        iconPosition={this.props.icon ? this.props.icon?.position : null}
      />
    );
  }
}
