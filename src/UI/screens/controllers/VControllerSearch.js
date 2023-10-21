import VModelSearch from '../models/VModelSearch';
import VControllerPagination from './VControllerPagination';

export default class VControllerSearch extends VControllerPagination {
  static initialState = {
    data: [],
    loading: true,
    loadingMore: false,
    query: '',
    searched: false,
    searchSuggestions: [],
    showingSuggestions: false,
  };

  static async _showSearchHistory() {
    const query = this.view.state.query;
    const searchSuggestions = await VModelSearch.getSearchHistory(query);

    this.setState({
      searchSuggestions: searchSuggestions,
      showingSuggestions: true,
    });
  }

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

    VModelSearch.saveSearchQuery(query);

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
    this.setState(
      {
        query: query,
      },
      () => {
        this._showSearchHistory();
      },
    );
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

  static onSearchInputLostFocus() {
    setTimeout(() => {
      this.setState({
        showingSuggestions: false,
      });
    }, 3000);
  }

  static onPressSearchButton() {
    this.search();
  }

  static onPressItem(item) {
    console.log(item);
  }

  static onPressLikeButton(itemId) {
    
  }

  static onPressUser(userId) {
    alert('go to user profile: ' + userId);
  }
}
