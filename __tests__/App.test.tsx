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

  it('Check if the app shows the VIEWHome', () => {
    waitFor(() => {
      expect(screen.getByTestId('VIEWHome')).toBeDefined();
    });
  });

  it('Check VIEWHome photo list and pagination', async () => {
    let FLATLIST_photos;
    await waitFor(() => {
      FLATLIST_photos = screen.getByTestId('flatListPagination');
      expect(FLATLIST_photos).toBeDefined();
      expect(FLATLIST_photos.props.data.length).toBe(10);
    });

    act(() => {
      fireEvent.scroll(FLATLIST_photos, {
        nativeEvent: {
          contentSize: {height: 500, width: 100},
          contentOffset: {y: 500},
          layoutMeasurement: {height: 100, width: 100},
        },
      });
    });

    await waitFor(() => {
      let FLATLIST_photos_paginated = screen.getByTestId('flatListPagination');
      expect(FLATLIST_photos_paginated.props.data.length).toBe(20);
    });
  });

  it('Check navigate to VIEWTopics and shows list', async () => {
    await act(() => {
      fireEvent.press(screen.getAllByTestId('NAVVIEWTopics')[0]);
    });
    await waitFor(() => {
      expect(screen.getByTestId('VIEWTopics')).toBeDefined();
      let FLATLIST_topics = screen.getByTestId('flatListPagination');
      expect(FLATLIST_topics.props.data.length).toBe(10);
    });
  });
});
