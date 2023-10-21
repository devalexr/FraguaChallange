import VModelTopics from '../models/VModelTopics';
import VControllerPagination from './VControllerPagination';

export default class VControllerTopics extends VControllerPagination {
  static async getPaginationDATA() {
    return await VModelTopics.getTopics();
  }

  static onPressItem(item) {
    console.log(item);
  }

  //only one page
  static onLoadMore() {
    return;
  }
}
