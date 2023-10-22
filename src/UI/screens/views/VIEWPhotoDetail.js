/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ImageView from 'react-native-image-viewing';
import {GUI_styles} from '../../styles/STYLESMain';

export default class VIEWPhotoDetail extends Component {
  state = {
    visible: true,
  };

  render() {
    const item = this.props.route.params.item;
    return (
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
        }}>
        <ImageView
          doubleTapToZoomEnabled={true}
          swipeToCloseEnabled={true}
          onRequestClose={() => {
            this.setState(
              {
                visible: false,
              },
              () => {
                this.props.navigation.pop();
              },
            );
          }}
          backgroundColor="black"
          images={[
            {
              uri: item.urls.small,
            },
          ]}
          imageIndex={0}
          visible={this.state.visible}
          FooterComponent={image => (
            <View
              style={{
                padding: 20,
                paddingBottom: 60,
              }}>
              <Text
                style={[
                  GUI_styles.fontBold,
                  {color: 'white', marginTop: 10, fontSize: 30},
                ]}>
                {item.alt_description}
              </Text>
              <Text
                style={[
                  GUI_styles.fontSmallMuted,
                  {color: 'white', marginTop: 10},
                ]}>
                {item.description}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
