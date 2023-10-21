import VModelHome from '../models/VModelHome';
import VController from './VController';

export default class VControllerHome extends VController {
  static _page = 0;
  static _paginating = false;

  static initialState = {
    data: [],
    loading: true,
    loadingMore: false,
  };

  static async _onInit() {
    const data = await VModelHome.getPhotos(this._page);
    this.setState(
      {
        data: data,
        loading: false,
      },
      () => {
        this._page++;
      },
    );
  }

  //=============PAGINATION ===============
  static async _paginate() {
    if (this._paginating) {
      return;
    }

    this._paginating = true;

    const requestNewData = await VModelHome.getPhotos(this._page);
    let data = this.view.state.data.concat(requestNewData);
    //remove duplicated elements
    data = data.filter(
      (a, index, b) => index === b.findIndex(t => t.id === a.id),
    );
    this.setState(
      {
        data: data,
      },
      () => {
        this._page++;
        this._paginating = false;
      },
    );
  }

  //============ PAGINATION EVENTS =========
  static onLoadMore() {
    this.setState(
      {
        loadingMore: true,
      },
      async () => {
        await this._paginate();
        setTimeout(() => {
          this.setState({
            loadingMore: false,
          });
        }, 1000);
      },
    );
  }

  //=============== VIEW EVENTS =============

  static onPressItem(item) {
    console.log(item);
  }

  static onPressSearchBotton() {
    this.navigate('VIEWSearch');
  }

  static onPressLikeButtom(itemId) {
    alert('liked image: ' + itemId);
  }

  static onPressUser(userId) {
    alert('go to user profile: ' + userId);
  }
}
