/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, BackHandler, Platform, Image} from 'react-native';
import {Icon} from '@rneui/themed';
import {GUI_colors, GUI_styles} from '../styles/STYLESMain';
import {UIButtonLarge} from '../components/UIButtons';

export default class PAGEError extends Component {
  constructor(props) {
    super(props);
    this.message = props.route?.params?.message;
  }

  //===================== LIFECICLES ===========================
  componentDidMount() {
    this.onBackExitApp();
  }
  //======================= ON BACK EXIST APP ================
  onBackExitApp() {
    if (Platform.OS === 'android') {
      this.props.navigation.addListener('willFocus', () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      });
      this.props.navigation.addListener('willBlur', () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.handleBackPress,
        );
      });
    }
  }

  handleBackPress = () => {
    this.goToInit();
  };

  //========================= REDIRECT FUCTIONS==================

  goToInit() {
    this.props.navigation.replace('init');
  }

  //================================ RENDER FUNCTIONS ==================
  render() {
    return (
      <View style={GUI_styles.containerEC}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Icon
              name="emoticon-sick-outline"
              type="material-community"
              color={GUI_colors.COLOR_FONT_REGULAR}
              size={160}
            />
          </View>
          <View
            style={{
              marginVertical: 20,
            }}>
            <Text style={[GUI_styles.fontT1, {textAlign: 'center'}]}>
              ¡Uppss! Ha ocurrido un error inesperado
            </Text>
          </View>
          <View>
            <Text style={[GUI_styles.fontPM, {textAlign: 'center'}]}>
              {this.message}
            </Text>
          </View>
        </View>
        <View>
          <UIButtonLarge
            title="Volver al inicio"
            icono={{
              type: 'simple-line-icon',
              name: 'home',
            }}
            onPress={() => {
              this.goToInit();
            }}
          />
        </View>
      </View>
    );
  }
}
