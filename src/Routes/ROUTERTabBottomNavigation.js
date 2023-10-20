/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import {GUI_colors, GUI_styles} from '../UI/styles/STYLESMain';
import VIEWHome from '../UI/screens/views/VIEWHome';
import VIEWExplore from '../UI/screens/views/VIEWExplore';
import VIEWSearch from '../UI/screens/views/VIEWSearch';
import VIEWFavorites from '../UI/screens/views/VIEWFavorites';

const Tab = createBottomTabNavigator();

export default class ROUTERTabBottomNavigation extends React.Component {
  routes = {
    VIEWHome: {
      icon: {
        type: 'font-awesome-5',
        name: 'unsplash',
      },
      title: 'Unsplash',
    },
    VIEWSearch: {
      icon: {
        type: 'ionicon',
        name: 'search-outline',
      },
      title: 'Buscar',
    },
    VIEWExplore: {
      icon: {
        type: 'font-awesome',
        name: 'wpexplorer',
      },
      title: 'Explorar',
    },
    VIEWFavorites: {
      icon: {
        type: 'material-community',
        name: 'heart-outline',
      },
      title: 'Favoritos',
    },
  };

  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          header: ({props}) => {
            return this.getNavigationHeader(route.name);
          },
          tabBarIcon: ({focused, color, size}) => {
            return this.getNavigationIcon(route.name, focused);
          },
          tabBarLabel: ({focused, horizontal, tintColor}) => {
            return null;
          },
          tabBarStyle: {
            height: 60,
          },
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="VIEWHome"
          component={VIEWHome}
        />
        <Tab.Screen
          //options={{headerShown: false}}
          name="VIEWExplore"
          component={VIEWExplore}
        />
        <Tab.Screen
          //options={{headerShown: false}}
          name="VIEWSearch"
          component={VIEWSearch}
        />
        <Tab.Screen
          //options={{headerShown: false}}
          name="VIEWFavorites"
          component={VIEWFavorites}
        />
      </Tab.Navigator>
    );
  }

  getNavigationIcon(route, focused) {
    const icon = this.routes[route].icon;
    return (
      <View
        style={{
          backgroundColor: focused
            ? GUI_colors.COLOR_TAB_NAVIGATOR_BACKGROUND
            : 'white',
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
        }}>
        <Icon
          name={icon.name}
          type={icon.type}
          color={
            focused
              ? GUI_colors.COLOR_PRIMARY
              : GUI_colors.COLOR_TAB_NAVIGATOR_ICON_BORDER
          }
          size={30}
        />
      </View>
    );
  }

  getNavigationHeader(route) {
    const title = this.routes[route].title;
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
          backgroundColor: 'white',
        }}>
        <Text style={[GUI_styles.fontT1]}>{title}</Text>
      </View>
    );
  }
}
