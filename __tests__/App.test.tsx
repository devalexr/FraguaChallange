/**
 * @format
 */

import 'react-native';
import React, {Component} from 'react';
import App from '../App';
import {render, waitFor, act, screen} from '@testing-library/react-native';
// Note: import explicitly to use the types shiped with jest.
import {it, describe, beforeEach, expect} from '@jest/globals';

//disable console.log
//console.log = function () {};

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Render App', () => {
    expect(screen).toBeDefined();
  });

  it('Check if the app shows the HOMEView', () => {
    waitFor(() => {
      expect(screen.getByTestId('appHeader')).toBeDefined();
    });
  });

  it('Check HOMEView photo list', async () => {
    await waitFor(() => {
      const pagination_list = screen.getByTestId('flatListPagination');
      expect(pagination_list).toBeDefined();
      expect(pagination_list.props.data.length).toBe(10);
    });
  });
});
