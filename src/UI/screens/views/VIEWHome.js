/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Dimensions, FlatList, Text, View, Image, Pressable} from 'react-native';
import VControllerHome from '../controllers/VControllerHome';
import AutoHeightImage from 'react-native-auto-height-image';
import LinearGradient from 'react-native-linear-gradient';
import {GUI_colors, GUI_styles} from '../../styles/STYLESMain';
import {Icon, Badge} from '@rneui/themed';
import HELPERTextFormat from '../../helpers/HELPERTextFormat';

export default class VIEWHome extends Component {
  constructor(props) {
    super(props);
    this.VController = VControllerHome;
    this.VController.setView(this);
  }

  render() {
    if (!this.state.loading) {
      return (
        <>
          <FlatList
            data={this.state.data}
            bounces={false}
            keyExtractor={item => {
              return item.id;
            }}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={() => {
              return this.renderHeader();
            }}
            renderItem={item => {
              item = item.item;
              return this.renderItem(item);
            }}
            onEndReached={() => {
              //this.paginarLM();
            }}
            ListFooterComponent={() => {
              //return this.renderLoadingFooter();
            }}
            ListEmptyComponent={() => {
              //return this.renderEmptyLIST();
            }}
            contentContainerStyle={
              this.state.data?.length > 0 ? {} : {flex: 12}
            }
            onScrollEndDrag={e => {}}
          />
        </>
      );
    } else {
      return <Text>cargando....</Text>;
    }
  }

  renderItem(item) {
    return (
      <View
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
            this.VController.onPressItem(item);
          }}>
          <AutoHeightImage
            width={Dimensions.get('window').width - 40}
            source={{uri: item.urls.small}}
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
            height: 100,
            alignItems: 'center',
            flex: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 10,
            }}>
            <Pressable
              onPress={() => {
                this.VController.onPressUser(item.user.name);
              }}>
              <Image
                style={{
                  borderRadius: 30,
                  marginRight: 10,
                }}
                source={{
                  uri: item.user.profile_image.medium,
                  height: 60,
                  width: 60,
                }}
              />
            </Pressable>
            <View>
              <Pressable
                onPress={() => {
                  this.VController.onPressUser(item.user.name);
                }}>
                <Text style={GUI_styles.fontBold}>{item.user.name}</Text>
              </Pressable>
              <Text style={GUI_styles.fontSmallMuted}>
                {HELPERTextFormat.formatDT(item.created_at)}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Badge
              badgeStyle={{
                position: 'absolute',
                bottom: -4,
                left: 2,
                zIndex: 100,
              }}
              value={item.likes}
              status="error"
            />
            <Icon
              size={32}
              name="heart-outline"
              type="material-community"
              color="black"
              onPress={() => {
                this.VController.onPressLikeButtom(item.id);
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  renderHeader() {
    return (
      <View
        style={{
          flex: 12,
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 14,
        }}>
        <View
          style={{
            flex: 10,
          }}>
          <Image
            style={{
              height: 48,
              width: 213,
            }}
            source={require('../../../assets/img/logo-header.png')}
          />
        </View>
        <Pressable
          onPress={() => {
            this.VController.onPressSearchBotton();
          }}
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="search-outline"
            type="ionicon"
            color={GUI_colors.COLOR_PRIMARY}
            size={40}
          />
        </Pressable>
      </View>
    );
  }
}
