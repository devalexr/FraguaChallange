import VController from './VController';

export default class VControllerPagination extends VController {
  static _page = 0;
  static _paginating = false;

  static initialState = {
    data: [],
    loading: true,
    loadingMore: false,
  };

  static async _onInit() {
    const data = await this.getPaginationDATA();
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

    const requestNewData = this.getPaginationDATA();
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

  static async getPaginationDATA() {
    return [];
  }
}
