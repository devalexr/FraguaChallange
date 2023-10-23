/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {ScrollView, Text, View, Image} from 'react-native';
import {GUI_styles} from '../../styles/STYLESMain';
export default class VIEWCredits extends Component {
  render() {
    return (
      <ScrollView>
        <View
          testID="VIEWCredits"
          style={{
            padding: 20,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/img/alex.png')}
              style={{
                width: 140,
                height: 140,
                borderRadius: 75,
                borderColor: 'white',
                borderWidth: 6,
              }}
            />
            <Text
              style={[GUI_styles.fontBold, {fontSize: 18, marginVertical: 10}]}>
              Github: devalexr
            </Text>
          </View>
          {this.renderTitle('Resumen del desafío de código')}
          {this.renderP(
            'Crea una aplicación móvil en React Native, que muestre las fotos devueltas por la API de búsqueda de Unsplash. El proyecto debe compilarse tanto en Android o iOs. Tenga en cuenta que la calidad del código es importante: legibilidad, coherencia, formato, etc. Al finalizar, el código fuente enviarlo por correo electrónico en un zip o subirlo a Github en un repositorio publico.',
          )}
          {this.renderTitle('Requerimientos funcionales')}
          {this.renderPoint(
            'Proporcionar una interfaz para ingresar términos de búsqueda (siga las pautas de Material Design)',
          )}
          {this.renderPoint(
            'Mostrar los resultados de la búsqueda, incluida una vista previa en miniatura de la imagen y el título.',
          )}
          {this.renderPoint(
            'Al seleccionar una miniatura o un título, se muestra la foto completa.',
          )}
          {this.renderPoint(
            'Proporcionar una forma de regresar a los resultados de búsqueda.',
          )}
          {this.renderPoint('Proporcionar una forma de buscar otro término')}
          {this.renderTitle('Requisitos técnicos')}
          {this.renderPoint(
            'Nuevo desarrollador de Unsplash (para obtener la clave API): https://unsplash.com/join',
          )}
          {this.renderPoint(
            'Documentación de la API de Unsplash: https://unsplash.com/documentation',
          )}
          {this.renderPoint(
            'Se permiten bibliotecas, sin embargo, no se debe usar nada específico de Unsplash.',
          )}
          {this.renderPoint(
            'Usar una arquitectura de diseño en la implementación del código (Bloc, MVVM, MVP, VIPER)',
          )}
          {this.renderTitle('Extra (Opcional)')}
          {this.renderPoint(
            'Guarde los términos de búsqueda anteriores y preséntelos como opciones de búsqueda rápida.',
          )}
          {this.renderPoint(
            'Resultados de la página (permitir que se muestren más que la página inicial de resultados de API)',
          )}
          {this.renderPoint('Manejo sensato de errores')}
          {this.renderPoint('Pruebas unitarias')}
          {this.renderPoint('Pruebas de instrumentación')}
        </View>
      </ScrollView>
    );
  }

  renderP(text) {
    return <Text style={GUI_styles.fontPM}>{text}</Text>;
  }

  renderPoint(text) {
    return (
      <Text style={[GUI_styles.fontPM, {marginVertical: 6}]}>
        {'● ' + text}
      </Text>
    );
  }

  renderTitle(title) {
    return (
      <Text
        style={[
          GUI_styles.fontBold,
          {fontSize: 24, marginTop: 20, marginBottom: 6},
        ]}>
        {title}
      </Text>
    );
  }
}
