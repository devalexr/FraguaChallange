import UNSPLASHPhotosService from '../../../Services/Unsplash/UNSPLASHPhotosService';
import STOREDeviceSearch from '../../../Store/device/STOREDeviceSearch';
import VModel from './VModel';

export default class VModelSearch extends VModel {
  static async search(query, page) {
    return await UNSPLASHPhotosService.search(query, page);
  }
  static saveSearchQuery(query) {
    STOREDeviceSearch.add(query);
  }
  static async getSearchHistory(query) {
    if (!query) {
      return [];
    }
    const JSON_search_history = await STOREDeviceSearch.get();
    const key = STOREDeviceSearch.slugify(query);

    let history = JSON_search_history.filter(function (item) {
      return item.key.includes(key);
    });

    history.sort((a, b) => b.created_at - a.created_at);

    return history.slice(0, 5);
  }
}
