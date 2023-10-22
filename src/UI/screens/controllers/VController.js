export default class VController {
  static initialState = {};
  static view = null;

  static setView(view) {
    this.view = view;
    this.view.state = this.initialState;
    this._onInit();
  }

  static setState(state, callback = () => {}) {
    this.view.setState(state, () => {
      callback();
    });
  }

  static navigate(route, props = {}) {
    console.log(props);
    this.view.props.navigation.navigate(route, props);
  }

  static _onInit() {}
}
