/**
 * @format
 */

import 'react-native';
import React, {Component} from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';
// Note: import explicitly to use the types shiped with jest.
import {it, describe, beforeEach, expect} from '@jest/globals';

let app_component: Component;

//disable console.log
console.log = function () {};

describe('App', () => {
  beforeEach(() => {
    app_component = render(<App />);
  });

  it('Render App', () => {
    expect(app_component).toBeDefined();
  });
});
