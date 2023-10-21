import UNSPLASHTopicsService from '../../../Services/Unsplash/UNSPLASHTopicsService';
import VModel from './VModel';

export default class VModelTopics extends VModel {
  static async getTopics(page) {
    return await UNSPLASHTopicsService.getTopics(page);
  }
}
