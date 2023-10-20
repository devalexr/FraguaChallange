import {Fonts} from './Fonts';
import {Platform, StyleSheet} from 'react-native';

export const GUI_colors = {
  COLOR_FONT_REGULAR: '#101743',
  COLOR_FONT_REGULAR_GRAY: '#6A737D',
  COLOR_FONT_BOLD: '#101743',
  COLOR_BORDER: '#D1D5DB',
  COLOR_PRIMARY: 'black',
  COLOR_RED: 'red',
  COLOR_BACKGROUND_GRAY: '#f4f5f6',
  COLOR_BACKGROUND_GRAY_STRONG: '#444D56',
  COLOR_TAB_NAVIGATOR_ICON_BORDER: '#B4BAC0',
  COLOR_TAB_NAVIGATOR_BACKGROUND: 'fa00ff',
};

export const GUI_styles = StyleSheet.create({
  //===== FONTS ===
  fontT1: {
    color: GUI_colors.COLOR_FONT_BOLD,
    fontSize: 28,
    fontFamily: Fonts.ArticulatB,
  },
  fontBold: {
    color: GUI_colors.COLOR_FONT_BOLD,
    fontSize: 16,
    fontFamily: Fonts.ArticulatB,
  },
  fontPM: {
    color: GUI_colors.COLOR_FONT_REGULAR_GRAY,
    fontSize: 16,
    fontFamily: Fonts.ArticulatM,
  },
  fontSmallMuted: {
    color: GUI_colors.COLOR_FONT_REGULAR_GRAY,
    fontSize: 12,
    fontFamily: Fonts.ArticulatM,
  },

  //==== CONTAINERS ====
  containerEC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  shadow: {
    shadowOffset: {width: 0, height: 4},
    shadowColor:
      Platform.OS === 'ios'
        ? GUI_colors.COLOR_BORDER
        : GUI_colors.COLOR_BACKGROUND_GRAY_STRONG,
    shadowOpacity: 0.7,
    elevation: Platform.OS === 'ios' ? 1 : 5,
    borderWidth: 1,
    borderColor: GUI_colors.COLOR_BORDER,
    backgroundColor: 'white',
    zIndex: 2,
  },
  //====== BUTTONS =====
  BTNLarge: {
    backgroundColor: GUI_colors.COLOR_PRIMARY,
    width: Platform.select({
      ios: '100%',
      android: 'auto',
    }),
    paddingHorizontal: Platform.select({
      ios: null,
      android: 20,
    }),
    height: 56,
    borderRadius: 10,
  },
});
