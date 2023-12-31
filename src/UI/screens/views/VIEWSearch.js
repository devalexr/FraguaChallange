/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Keyboard, Platform, Pressable, Text, View} from 'react-native';
import VIEWPagination from './VIEWPagination';
import VControllerSearch from '../controllers/VControllerSearch';
import {UNPhotoItem} from '../../components/views/UNPhotoItem';
import AutocompleteInput from 'react-native-autocomplete-input';
import {GUI_colors, GUI_styles} from '../../styles/STYLESMain';
import {Icon} from '@rneui/themed';
import {UIFullScreenMessage} from '../../components/UIImages';
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

  renderEmpty() {
    if (!this.state.searched) {
      return (
        <UIFullScreenMessage
          title="Buscar en Unsplash"
          message="La fuente de imágenes de internet.
          Con recursos de creadores de todo el mundo."
          icon={{
            type: 'ionicon',
            name: 'search-outline',
          }}
        />
      );
    } else {
      return (
        <UIFullScreenMessage
          title="Sin resultados"
          message="Desafortunadamente no encontramos resultados para la búsqueda solicitada."
          icon={{
            type: 'entypo',
            name: 'emoji-sad',
          }}
        />
      );
    }
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
        testID="VIEWSearch"
        style={{
          zIndex: 10,
          borderTopColor: GUI_colors.COLOR_BORDER,
          borderTopWidth: 1,
          marginBottom: Platform.OS === 'android' ? 60 : 80,
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
              testID="BTNSearch"
              onPress={() => {
                Keyboard.dismiss();
                this.VController.onPressSearchButton();
              }}>
              <Icon
                name="search-outline"
                type="ionicon"
                color={GUI_colors.COLOR_PRIMARY}
                size={44}
              />
            </Pressable>
          </View>
          <AutocompleteInput
            autoFocus={true}
            returnKeyType="search"
            testID="INPSearch"
            hideResults={!this.state.showingSuggestions}
            placeholder="Buscar imágenes"
            containerStyle={{
              backgroundColor: 'white',
              marginHorizontal: -2,
              marginBottom: 10,
            }}
            listContainerStyle={{
              marginHorizontal: Platform.OS === 'android' ? -8 : 0,
            }}
            style={[
              {
                height: 44,
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
              marginBottom: 10,
            }}
            data={this.state.searchSuggestions}
            value={this.state.query}
            onChangeText={query => {
              this.VController.onChageSearchQuery(query);
            }}
            onSubmitEditing={() => {
              this.VController.onSearch();
            }}
            onBlur={() => {
              this.VController.onSearchInputLostFocus();
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
