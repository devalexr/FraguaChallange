import VModelSearch from '../models/VModelSearch';
import VControllerPagination from './VControllerPagination';

export default class VControllerSearch extends VControllerPagination {
  static initialState = {
    data: [],
    loading: true,
    loadingMore: false,
    query: '',
    showingSuggestions: true,
  };

  static async getPaginationDATA() {
    const query = this.view.state.query;
    if (!query) {
      return [];
    }

    const data = await VModelSearch.search(this.view.state.query, this._page);
    return data.results;
  }

  static search() {
    const query = this.view.state.query;
    if (!query) {
      return;
    }
    this.setState(
      {
        data: [],
      },
      () => {
        this._page = 0;
        this._paginate();
      },
    );
  }

  //=============== VIEW EVENTS =============
  static onSearch() {
    this.search();
  }

  static onChageSearchQuery(query) {
    this.setState({
      query: query,
    });
  }

  static onPressSearchSuggestion(query) {
    this.setState(
      {
        query: query,
        showingSuggestions: false,
      },
      () => {
        this.search();
      },
    );
  }

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
