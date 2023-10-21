/* eslint-disable react-native/no-inline-styles */
import {Icon} from '@rneui/themed';
import React, {Component} from 'react';
import {GUI_colors, GUI_styles} from '../../styles/STYLESMain';
import {Text} from 'react-native';
import HELPERTextFormat from '../../helpers/HELPERTextFormat';

export class UNLikeIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      count: this.props.item.likes,
    };
  }

  render() {
    const item = this.props.item;

    return (
      <>
        <Icon
          size={36}
          name="heart-outline"
          type="material-community"
          color={
            this.state.liked ? GUI_colors.COLOR_RED : GUI_colors.COLOR_PRIMARY
          }
          onPress={() => {
            this.setState({
              liked: !this.state.liked,
              count: this.state.count + 1,
            });

            this.props.onPress(item.id);
          }}
        />
        <Text
          style={[GUI_styles.fontSmallMuted, {marginLeft: 2, fontSize: 10}]}>
          {HELPERTextFormat.formatNumber(this.state.count)}
        </Text>
      </>
    );
  }
}
