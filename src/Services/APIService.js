import axios from 'axios';
import {AXIOS_REQUEST_TIMEOUT} from '@env';
import {ROUTERNavigation} from '../Routes/ROUTERMain';

export default class APIService {
  static API_BASE_URL = '';
  static CACHE_REQUEST = {};

  static async _get(url, config = {}) {
    axios.defaults.timeout = parseInt(AXIOS_REQUEST_TIMEOUT);
    this.logBefore(url, 'get');
    const response = await axios.get(url);
    this.logAfter(url, 'get', response);
    return response;
  }

  static async get(url, parameters, config = {}) {
    const URL_REQUEST = this._createURLRequest(url, parameters);
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

        return JSON_response;
      } else {
        this._catchRequestError(
          'Request error -> CODE: ' + response.status,
          URL_REQUEST,
        );
      }
    } catch (error) {
      this._catchRequestError(error, URL_REQUEST);
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
      ROUTERNavigation.navigate('error', {
        message: error.toString(),
        url: url,
      });
    }, 500);
  }
}
