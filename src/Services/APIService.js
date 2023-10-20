import axios from 'axios';
import {AXIOS_REQUEST_TIMEOUT} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {ROUTERNavigation} from '../Routes/ROUTERMain';

export default class APIService {
  static API_BASE_URL = '';
  static CACHE_REQUEST = {};

  static async _get(url, config = {}) {
    axios.defaults.timeout = parseInt(AXIOS_REQUEST_TIMEOUT);
    this.logBefore(url, 'get');
    const response = await axios.get(url);
    //this.logAfter(url, 'get', response);
    return response;
  }

  static async get(url, parameters, config = {}) {
    const URL_REQUEST = this._createURLRequest(url, parameters);

    const deviceMemory = config?.device_memory;
    const cacheRequest = config?.cache;

    if (cacheRequest && this.CACHE_REQUEST[URL_REQUEST]) {
      console.log(
        'JSON Obtenido desde la cache del dispositivo URL: ',
        URL_REQUEST,
        this.CACHE_REQUEST[URL_REQUEST],
      );
      return this.CACHE_REQUEST[URL_REQUEST];
    }

    try {
      const response = await this._get(URL_REQUEST);

      if (response.status === 200) {
        const JSON_response = response.data;

        //guardar la respuesta en cache
        if (cacheRequest) {
          this.CACHE_REQUEST[URL_REQUEST] = JSON_response;
        }

        if (deviceMemory) {
          try {
            await AsyncStorage.setItem(
              URL_REQUEST,
              JSON.stringify(JSON_response),
            );
            console.log(
              'JSON Guardado en almacenamiento del dispositivo URL: ',
              URL_REQUEST,
              JSON_response,
            );
          } catch (error) {
            console.error(
              'Error al guardar respuesta del request en el dispositivo',
              error.toString(),
            );
          }
        }

        return JSON_response;
      } else {
        /*
        if (TARGET === 'dev') {
          Alert.alert(
            'Ocurrió un error al obtener los datos del servidor',
            response?.data?.mensaje,
          );
        }
        */
      }
    } catch (error) {
      console.log(error.toString());

      if (cacheRequest) {
        //usar AsyncStorage
        try {
          const JSON_respuesta = await AsyncStorage.getItem(URL_REQUEST);
          if (!JSON_respuesta) {
            return;
          }
          return JSON.parse(JSON_respuesta);
        } catch (error) {
          //no existe el request en la memoria del dispositivo
        }
      } else {
        this._catchRequestError(error, URL_REQUEST);
        /*
        este sleep() evita que se ejecute el codigo que
        esta uilizado la llamada el API antes de que _catchRequestError()
        se lanze. esto evita crashes importantes en el app
        */
        //await HELPERUtils.sleep(5000);
      }
    }
  }

  static _createURLRequest(url, parameters = {}) {
    parameters = this._requestInjectParameters(parameters);
    let url_parameters = '';

    if (parameters) {
      url_parameters = '?';

      Object.keys(parameters).forEach(function (k) {
        url_parameters += k + '=' + parameters[k] + '&';
      });
    }

    return this.getAPIBaseURL() + url + url_parameters;
  }

  static _requestInjectParameters(parameters) {
    return parameters;
  }

  //====================== INIT AXIOS ================================

  static getAPIBaseURL() {
    return this.API_BASE_URL;
  }

  //==================================== LOGS ======================================

  static logBefore(url, type, data = {}) {
    console.log(`API REQUEST (${type})`, url, 'DATA', data);
  }

  static logAfter(url, type, response) {
    console.log(`API RESPONSE (${type})`, url, 'RESPOSE', response);
  }

  //=============== ERRORS ==================

  static async _catchRequestError(error, url = '') {
    setTimeout(() => {
      ROUTERNavigation.reset('pageErrorServer', {
        message: error.toString(),
        url: url,
      });
    }, 500);
  }
}
