import VController from './VController';

export default class VControllerPagination extends VController {
  static _page = 0;
  static _pageFinal = null;
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
    if (!this.__canPaginate()) {
      return false;
    }

    this._paginating = true;

    const stateData = this.view.state.data;
    const requestData = await this.getPaginationDATA();
    let newStateData = stateData.concat(requestData);
    //remove duplicated elements
    newStateData = newStateData.filter(
      (a, index, b) => index === b.findIndex(t => t.id === a.id),
    );

    this.setState(
      {
        data: newStateData,
        loading: false,
        loadingMore: false,
      },
      () => {
        setTimeout(() => {
          this._page++;
          this._paginating = false;
        }, 3000);
      },
    );
  }

  //============ PAGINATION EVENTS =========
  static onLoadMore() {
    if (!this.__canPaginate()) {
      return false;
    }

    this.setState(
      {
        loadingMore: true,
      },
      async () => {
        await this._paginate();
      },
    );
  }

  static __canPaginate() {
    if (this._paginating) {
      return false;
    }

    if (this._pageFinal !== null && this._page > this._pageFinal) {
      return false;
    }

    return true;
  }

  static async getPaginationDATA() {
    return [];
  }
}
