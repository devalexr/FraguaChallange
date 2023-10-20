import UNSPLASHService from '../../../Services/Unsplash/UNSPLASHService';
import VModel from './VModel';

export default class VModelHome extends VModel {
  static async getPhotos() {
    return await UNSPLASHService.getPhotos();
  }
}
