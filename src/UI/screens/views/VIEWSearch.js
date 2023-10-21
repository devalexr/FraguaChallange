/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import VIEWPagination from './VIEWPagination';
import VControllerSearch from '../controllers/VControllerSearch';
import {UNPhotoItem} from '../../components/views/UNPhotoItem';
import AutocompleteInput from 'react-native-autocomplete-input';
import {GUI_colors, GUI_styles} from '../../styles/STYLESMain';
export default class VIEWSearch extends VIEWPagination {
  VController = VControllerSearch;

  constructor(props) {
    super(props);
    this.VController.setView(this);
  }

  componentDidMount() {
    //super.componentDidMount();
    //this.searchInput.focus();
    console.log(this.searchInput);
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
        onPressLikeButtom={itemId => {
          this.VController.onPressLikeButtom(itemId);
        }}
      />
    );
  }

  renderSearchSuggestion(item) {
    return (
      <Pressable
        onPress={() => {
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
            }}
            data={[
              {
                value: 'Dogs',
                created: 102354,
              },
            ]}
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
