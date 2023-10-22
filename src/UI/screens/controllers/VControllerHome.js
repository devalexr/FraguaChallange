import VModelHome from '../models/VModelHome';
import VControllerPagination from './VControllerPagination';

export default class VControllerHome extends VControllerPagination {
  static async getPaginationDATA() {
    return await VModelHome.getPhotos(this._page);
  }

  //=============== VIEW EVENTS =============

  static onPressItem(item) {
    this.navigate('VIEWPhotoDetail', {item: item});
  }

  static onPressSearchBotton() {
    this.navigate('VIEWSearch');
  }

  static onPressLikeButton(itemId) {}

  static onPressUser(userId) {
    alert('go to user profile: ' + userId);
  }
}
