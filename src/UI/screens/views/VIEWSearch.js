/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';
import VIEWPagination from './VIEWPagination';
import VControllerSearch from '../controllers/VControllerSearch';
import {UNPhotoItem} from '../../components/views/UNPhotoItem';
import AutocompleteInput from 'react-native-autocomplete-input';
import {GUI_colors, GUI_styles} from '../../styles/STYLESMain';
import {Icon} from '@rneui/themed';
export default class VIEWSearch extends VIEWPagination {
  VController = VControllerSearch;

  constructor(props) {
    super(props);
    this.VController.setView(this);
  }

  //======================== RENDER =================

  renderItem(item) {
    return (
      <UNPhotoItem
        item={item}
        onPress={() => {
          this.VController.onPressItem(item);
        }}
        onPressUser={username => {
          this.VController.onPressUser(item.user.name);
        }}
        onPressLikeButton={itemId => {
          this.VController.onPressLikeButton(itemId);
        }}
      />
    );
  }

  renderSearchSuggestion(item) {
    return (
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          this.VController.onPressSearchSuggestion(item.value);
        }}
        style={{
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingVertical: 14,
          borderBottomWidth: 1,
          borderBottomColor: GUI_colors.COLOR_BORDER,
        }}>
        <Text style={[GUI_styles.fontPM, {}]}>{item.value}</Text>
      </Pressable>
    );
  }

  renderHeader() {
    return (
      <View
        style={{
          zIndex: 10,
          borderTopColor: GUI_colors.COLOR_BORDER,
          borderTopWidth: 1,
          marginBottom: 80,
        }}>
        <View
          style={{
            flex: 1,
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 1,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => {
                Keyboard.dismiss();
                this.VController.onPressSearchButton();
              }}>
              <Icon
                name="search-outline"
                type="ionicon"
                color={GUI_colors.COLOR_PRIMARY}
                size={50}
              />
            </Pressable>
          </View>
          <AutocompleteInput
            autoFocus={true}
            returnKeyType="search"
            hideResults={!this.state.showingSuggestions}
            placeholder="Buscar imágenes"
            containerStyle={{
              backgroundColor: 'white',
              marginHorizontal: -2,
            }}
            style={[
              {
                height: 50,
                backgroundColor: GUI_colors.COLOR_BACKGROUND_GRAY,
                borderRadius: 30,
                paddingLeft: 12,
              },
              GUI_styles.fontBold,
            ]}
            inputContainerStyle={{
              borderRadius: 30,
              margin: 10,
              marginRight: 70,
            }}
            data={this.state.searchSuggestions}
            value={this.state.query}
            onChangeText={query => {
              this.VController.onChageSearchQuery(query);
            }}
            onSubmitEditing={() => {
              this.VController.onSearch();
            }}
            flatListProps={{
              keyExtractor: (_, idx) => idx,
              renderItem: ({item}) => {
                return this.renderSearchSuggestion(item);
              },
            }}
          />
        </View>
      </View>
    );
  }
}
