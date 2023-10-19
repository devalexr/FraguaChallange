/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Icon} from '@rneui/themed';
import {GUI_colors} from '../UI/styles/STYLESMain';
import VIEWHome from '../UI/screens/views/VIEWHome';
import VIEWExplore from '../UI/screens/views/VIEWExplore';
import VIEWHistory from '../UI/screens/views/VIEWHistory';

const Tab = createMaterialBottomTabNavigator();

export default class ROUTERTabBottomNavigation extends React.Component {
  routes = {
    VIEWHome: {
      icon: {
        type: 'material-community',
        name: 'ab-testing',
      },
      title: 'Home',
    },
    VIEWHistory: {
      icon: {
        type: 'material-community',
        name: 'abacus',
      },
      title: 'History',
    },
    VIEWExplore: {
      icon: {
        type: 'material-community',
        name: 'account',
      },
      title: 'Explore',
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
          name="VIEWHistory"
          component={VIEWHistory}
        />
      </Tab.Navigator>
    );
  }

  getNavigationIcon(route, focused) {
    const icon = this.routes[route].icon;

    console.log(icon);

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

    let styles = {
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      backgroundColor: 'white',
    };

    return (
      <View style={styles}>
        <Text style={[{fontSize: 18}]}>{title}</Text>
      </View>
    );

    /*
    if (route !== 'CCHomeView') {
      //styles = {...styles, ...GUI_styles.shadow, ...{borderTopWidth: 0}};
    }

    return (
      <View style={styles}>
        <Text style={[GUI_styles.fontPB, {fontSize: 18}]}>{title}</Text>
      </View>
    );
    */
  }
}
