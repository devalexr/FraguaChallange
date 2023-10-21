import UNSPLASHPhotosService from '../../../Services/Unsplash/UNSPLASHPhotosService';
import VModel from './VModel';

export default class VModelSearch extends VModel {
  static async search(query, page) {
    return await UNSPLASHPhotosService.search(query, page);
  }
}
