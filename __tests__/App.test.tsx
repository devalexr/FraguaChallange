/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {
  render,
  waitFor,
  act,
  screen,
  fireEvent,
} from '@testing-library/react-native';
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

  it('Check HOMEView photo list and pagination', async () => {
    let photo_list;
    await waitFor(() => {
      photo_list = screen.getByTestId('flatListPagination');
      expect(photo_list).toBeDefined();
      expect(photo_list.props.data.length).toBe(10);
    });

    act(() => {
      fireEvent.scroll(photo_list, {
        nativeEvent: {
          contentSize: {height: 500, width: 100},
          contentOffset: {y: 500},
          layoutMeasurement: {height: 100, width: 100},
        },
      });
    });

    await waitFor(() => {
      let paginated_photo_list = screen.getByTestId('flatListPagination');
      expect(paginated_photo_list.props.data.length).toBe(20);
    });
  });

});
