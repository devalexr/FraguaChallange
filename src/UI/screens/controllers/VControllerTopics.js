import VModelTopics from '../models/VModelTopics';
import VControllerPagination from './VControllerPagination';

export default class VControllerTopics extends VControllerPagination {
  static async getPaginationDATA() {
    return await VModelTopics.getTopics(this._page);
  }

  static async _paginate() {
    return false;
  }
}
