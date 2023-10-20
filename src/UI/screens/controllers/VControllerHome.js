import VModelHome from '../models/VModelHome';
import VController from './VController';

export default class VControllerHome extends VController {
  static initialState = {
    data: [],
    loading: true,
  };

  static async _onInit() {
    const data = await VModelHome.getPhotos();
    this.setState({
      data: data,
      loading: false,
    });
  }

  //=============== VIEW EVENTS =============

  static onPressItem(item) {
    console.log(item);
  }

  static onPressLikeButtom(itemId) {
    alert('liked image: ' + itemId);
  }

  static onPressUser(userId) {
    alert('go to user profile: ' + userId);
  }
}
