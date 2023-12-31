import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import ROUTERTabBottomNavigation from './ROUTERTabBottomNavigation';
import PAGEError from '../UI/pages/PAGEError';
import PAGEInit from '../UI/pages/PAGEInit';
import VIEWPhotoDetail from '../UI/screens/views/VIEWPhotoDetail';
import {Platform} from 'react-native';

export default class ROUTERMain extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'init'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="home" component={ROUTERTabBottomNavigation} />
          <Stack.Screen name="init" component={PAGEInit} />
          <Stack.Screen name="error" component={PAGEError} />
          <Stack.Screen name="VIEWPhotoDetail" component={VIEWPhotoDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export class ROUTERNavigation {
  static navigator = null;

  static setNavigator(navigator) {
    this.navigator = navigator;
  }

  static navigate(screen, params = {}) {
    if (this.navigator) {
      this.navigator.navigate(screen, params);
    }
  }

  static reset(screen, params = {}) {
    if (this.navigator) {
      this.navigator.replace(screen, params);
    }
  }

  static back() {
    if (this.navigator) {
      this.navigator.pop();
    }
  }
}
