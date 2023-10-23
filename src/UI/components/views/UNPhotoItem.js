/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Pressable, Dimensions, Image} from 'react-native';
import {GUI_styles} from '../../styles/STYLESMain';
import LinearGradient from 'react-native-linear-gradient';
import HELPERTextFormat from '../../helpers/HELPERTextFormat';
import {UIImageLoading} from '../UIImages';
import {UNLikeIcon} from './UNLikeIcon';

export class UNPhotoItem extends Component {
  render() {
    const item = this.props.item;

    return (
      <View
        testID="UNPhotoItem"
        style={[
          {
            marginHorizontal: 20,
            marginVertical: 14,
            backgroundColor: 'white',
            borderRadius: 8,
          },
          GUI_styles.shadow,
        ]}>
        <Pressable
          onPress={() => {
            this.props.onPress(item);
          }}>
          <UIImageLoading
            width={Dimensions.get('window').width - 40}
            source={{uri: item.urls.thumb}}
            height={300}
            style={{
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />
          <LinearGradient
            colors={[
              'rgba(0,0,0, 0)',
              'rgba(0,0,0, 0.2)',
              'rgba(0,0,0, 0.6)',
              'rgba(0,0,0, 0.8)',
              'rgba(0, 0, 0, 0.9)',
            ]}
            style={{
              flex: 1,
              paddingLeft: 15,
              paddingRight: 15,
              paddingVertical: 10,
              marginTop: -80,
              height: 80,
              justifyContent: 'center',
            }}>
            <Text
              numberOfLines={2}
              style={[GUI_styles.fontBold, {color: 'white', marginTop: 10}]}>
              {item.alt_description}
            </Text>
          </LinearGradient>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            padding: 12,
            height: 80,
            alignItems: 'center',
            flex: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 9,
            }}>
            <Pressable
              onPress={() => {
                this.props.onPressUser(item.user.name);
              }}>
              <Image
                style={{
                  borderRadius: 30,
                  marginRight: 10,
                }}
                source={{
                  uri: item.user.profile_image.medium,
                  height: 50,
                  width: 50,
                }}
              />
            </Pressable>
            <View>
              <Pressable
                onPress={() => {
                  this.props.onPressUser(item.user.name);
                }}>
                <Text style={GUI_styles.fontBold}>{item.user.name}</Text>
              </Pressable>
              <Text style={[GUI_styles.fontSmallMuted, {fontSize: 10}]}>
                {HELPERTextFormat.formatDT(item.created_at)}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 3,
              paddingLeft: 40,
            }}>
            <UNLikeIcon
              item={item}
              onPress={() => {
                this.props.onPressLikeButton(item.id);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
