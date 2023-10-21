import VModelSearch from '../models/VModelSearch';
import VControllerPagination from './VControllerPagination';

export default class VControllerSearch extends VControllerPagination {
  static initialState = {
    data: [],
    loading: true,
    loadingMore: false,
    query: '',
    searched: false,
    searchSuggestions: [
      {
        value: 'Dogs',
        created: 102354,
      },
      {
        value: 'Dropbox',
        created: 102354,
      },
    ],
    showingSuggestions: true,
  };

  static async getPaginationDATA() {
    const query = this.view.state.query;
    if (!query) {
      return [];
    }

    const data = await VModelSearch.search(this.view.state.query, this._page);
    this._pageFinal = data.total_pages;
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
        showingSuggestions: false,
        loading: true,
        searched: true,
      },
      () => {
        this._page = 1;
        this._pageFinal = null;
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

  static onPressSearchButton() {
    this.search();
  }

  static onPressItem(item) {
    console.log(item);
  }

  static onPressLikeButton(itemId) {
    alert('liked image: ' + itemId);
  }

  static onPressUser(userId) {
    alert('go to user profile: ' + userId);
  }
}
