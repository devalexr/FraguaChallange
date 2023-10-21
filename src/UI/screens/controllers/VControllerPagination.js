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
    if (this._paginating) {
      return;
    }

    if (this._pageFinal !== null && this._page > this._pageFinal) {
      return;
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
