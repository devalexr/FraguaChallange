import APIService from '../APIService';
import {UNSPLASH_API_URL, UNSPLASH_API_KEY_ACCESS} from '@env';
export default class UNSPLASHService extends APIService {
  static API_BASE_URL = UNSPLASH_API_URL;

  static _requestInjectParameters(parameters) {
    parameters.client_id = UNSPLASH_API_KEY_ACCESS;
    return parameters;
  }
}
