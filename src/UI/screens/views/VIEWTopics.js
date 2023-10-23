/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Pressable, Text, View} from 'react-native';
import VIEWPagination from './VIEWPagination';
import VControllerTopics from '../controllers/VControllerTopics';
import {UIImageLoading} from '../../components/UIImages';
import LinearGradient from 'react-native-linear-gradient';
import {GUI_styles} from '../../styles/STYLESMain';
export default class VIEWTopics extends VIEWPagination {
  VController = VControllerTopics;

  constructor(props) {
    super(props);
    this.VController.setView(this);
  }

  renderHeader() {
    return <View testID="VIEWTopics" />;
  }

  renderItem(item) {
    return (
      <Pressable
        testID="UNPhotoTopic"
        onPress={() => {
          this.VController.onPressItem(item);
        }}>
        <UIImageLoading
          width={Dimensions.get('window').width}
          source={{uri: item.preview_photos[0].urls.small}}
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
            marginTop: -220,
            height: 200,
            justifyContent: 'center',
          }}>
          <Text
            numberOfLines={1}
            style={[
              GUI_styles.fontBold,
              {color: 'white', marginTop: 10, fontSize: 30},
            ]}>
            {item.title}
          </Text>
          <Text
            numberOfLines={5}
            style={[
              GUI_styles.fontSmallMuted,
              {color: 'white', marginTop: 10},
            ]}>
            {item.description}
          </Text>
        </LinearGradient>
      </Pressable>
    );
  }
}
