import {Fonts} from './Fonts';
import {StyleSheet} from 'react-native';

export const GUI_colors = {
  COLOR_FONT_REGULAR: '#101743',
  COLOR_FONT_REGULAR_GRAY: '#6A737D',
  COLOR_FONT_BOLD: '#101743',
  COLOR_PRIMARY: '#fa00ff',
  COLOR_BACKGROUND_GRAY: '#f4f5f6',
  COLOR_BACKGROUND_GRAY_STRONG: '#444D56',
  COLOR_TAB_NAVIGATOR_ICON_BORDER: '#B4BAC0',
  COLOR_TAB_NAVIGATOR_BACKGROUND: 'fa00ff',
};

const GUI_font = {
  T1: {
    color: GUI_colors.COLOR_FONT_REGULAR,
    fontSize: 30,
    fontFamily: Fonts.ArticulatB,
    fontWeight: '700',
    lineHeight: 35,
  },
};

export const GUI_styles = StyleSheet.create({
  fontT1: GUI_font.T1,
});
