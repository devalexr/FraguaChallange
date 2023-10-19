/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import ROUTERMain from './src/Routes/ROUTERMain';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 0,
        backgroundColor: 'white',
      }}>
      <ROUTERMain />
    </SafeAreaView>
  );
}

export default App;
