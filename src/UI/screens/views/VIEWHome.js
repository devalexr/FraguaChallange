import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import VControllerHome from '../controllers/VControllerHome';

export default class VIEWHome extends Component {
  constructor(props) {
    super(props);
    VControllerHome.setView(this);
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
    return <Text>item</Text>;
  }
}
