import VModelHome from '../models/VModelHome';
import VController from './VController';

export default class VControllerHome extends VController {
  static initialState = {
    data: [],
    loading: true,
  };

  static async onInit() {
    const data = await VModelHome.getPhotos();
    this.setState({
      data: data,
      loading: false,
    });
  }
}
