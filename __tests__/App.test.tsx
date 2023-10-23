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
  userEvent,
} from '@testing-library/react-native';
// Note: import explicitly to use the types shiped with jest.
import {it, describe, beforeEach, expect, jest} from '@jest/globals';

//disable console.log
//console.log = function () {};
console.error = function () {};

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  //Render App
  it('Render App', () => {
    expect(screen).toBeDefined();
  });

  //Home
  it('Check if the app shows the VIEWHome', () => {
    waitFor(() => {
      expect(screen.getByTestId('VIEWHome')).toBeDefined();
    });
  });

  //Home pagination
  it('Check VIEWHome photo list and pagination', async () => {
    await waitFor(
      () => {
        expect(screen.getAllByTestId('UNPhotoItem')).toBeDefined();
      },
      {timeout: 5000},
    );

    let FLATLIST_photos = screen.getByTestId('flatListPagination');
    expect(FLATLIST_photos.props.data.length).toBe(10);

    //scroll to end to paginate results
    await act(() => {
      fireEvent.scroll(FLATLIST_photos, {
        nativeEvent: {
          contentSize: {height: 500, width: 100},
          contentOffset: {y: 500},
          layoutMeasurement: {height: 100, width: 100},
        },
      });
    });

    await waitFor(() => {
      expect(FLATLIST_photos.props.data.length).toBe(20);
    });
  });

  //Topics
  it('Check navigate to VIEWTopics and shows list', async () => {
    await act(() => {
      fireEvent.press(screen.getAllByTestId('NAVVIEWTopics')[0]);
    });
    await waitFor(
      () => {
        expect(screen.getAllByTestId('UNPhotoTopic')).toBeDefined();
        const FLATLIST_topics = screen.getByTestId('flatListPagination');
        expect(FLATLIST_topics.props.data.length).toBe(10);
      },
      {timeout: 5000},
    );
  });

  //Search
  it('Try module VIEWSearch with the query "Mariam" |returns only 2 results|', async () => {
    await act(() => {
      fireEvent.press(screen.getAllByTestId('NAVVIEWSearch')[0]);
    });
    await waitFor(() => {
      expect(screen.getAllByTestId('VIEWSearch')).toBeDefined();
    });

    //Check UI
    let INP_search = screen.getByTestId('INPSearch');
    let BTN_search = screen.getByTestId('BTNSearch');
    jest.useFakeTimers();
    const EVENT_search = userEvent.setup();

    expect(INP_search).toBeDefined();
    expect(BTN_search).toBeDefined();

    //search "Mariam" returns only 2 results
    await act(() => {
      EVENT_search.type(INP_search, 'Mariam');
    });

    await act(() => {
      EVENT_search.press(BTN_search);
    });

    await waitFor(
      () => {
        expect(screen.getAllByTestId('UNPhotoItem')).toBeDefined();
      },
      {timeout: 5000},
    );

    //validate results
    let FLATLIST_photos = screen.getByTestId('flatListPagination');
    expect(FLATLIST_photos.props.data.length).toBe(2);
  });

  it('Check navigate to VIEWCredits', async () => {
    await act(() => {
      fireEvent.press(screen.getAllByTestId('NAVVIEWCredits')[0]);
    });
    await waitFor(() => {
      expect(screen.getAllByTestId('VIEWCredits')).toBeDefined();
    });
  });
});
