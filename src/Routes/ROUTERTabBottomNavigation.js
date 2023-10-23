/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import {GUI_colors, GUI_styles} from '../UI/styles/STYLESMain';
import VIEWHome from '../UI/screens/views/VIEWHome';
import VIEWTopics from '../UI/screens/views/VIEWTopics';
import VIEWSearch from '../UI/screens/views/VIEWSearch';
import VIEWCredits from '../UI/screens/views/VIEWCredits';

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
    VIEWTopics: {
      icon: {
        type: 'material-community',
        name: 'fire',
      },
      title: 'Topics',
    },
    VIEWCredits: {
      icon: {
        type: 'entypo',
        name: 'info-with-circle',
      },
      title: 'Acerca de',
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
            height: 70,
          },
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="VIEWHome"
          component={VIEWHome}
        />
        <Tab.Screen name="VIEWTopics" component={VIEWTopics} />
        <Tab.Screen name="VIEWSearch" component={VIEWSearch} />
        <Tab.Screen name="VIEWCredits" component={VIEWCredits} />
      </Tab.Navigator>
    );
  }

  getNavigationIcon(route, focused) {
    const icon = this.routes[route].icon;

    return (
      <View
        testID={'NAV' + route}
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
