import VModelSearch from '../models/VModelSearch';
import VControllerPagination from './VControllerPagination';

export default class VControllerSearch extends VControllerPagination {
  static async getPaginationDATA() {
    const data = await VModelSearch.search('dogs', this._page);
    return data.results;
  }

  //=============== VIEW EVENTS =============

  static onPressItem(item) {
    console.log(item);
  }
}
