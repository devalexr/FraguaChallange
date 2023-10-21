import UNSPLASHPhotosService from '../../../Services/Unsplash/UNSPLASHPhotosService';
import VModel from './VModel';

export default class VModelHome extends VModel {
  static async getPhotos(page) {
    return await UNSPLASHPhotosService.getPhotos(page);
  }
}
