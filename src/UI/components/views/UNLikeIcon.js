/* eslint-disable react-native/no-inline-styles */
import {Icon} from '@rneui/themed';
import React, {Component} from 'react';
import {GUI_colors, GUI_styles} from '../../styles/STYLESMain';
import {Pressable, Text, View} from 'react-native';
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
    const count = !this.state.liked
      ? this.state.count + 1
      : this.state.count - 1;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Pressable
          onPress={() => {
            this.setState({
              liked: !this.state.liked,
              count: count,
            });
            this.props.onPress(item.id);
          }}>
          <Icon
            size={36}
            name="heart-outline"
            type="material-community"
            color={
              this.state.liked ? GUI_colors.COLOR_RED : GUI_colors.COLOR_PRIMARY
            }
          />
        </Pressable>
        <View style={{}}>
          <Text
            style={[GUI_styles.fontSmallMuted, {marginLeft: 2, fontSize: 10}]}>
            {HELPERTextFormat.formatNumber(this.state.count)}
          </Text>
        </View>
      </View>
    );
  }
}
