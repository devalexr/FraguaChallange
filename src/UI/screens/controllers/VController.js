export default class VController {
  static initialState = {};
  static view = null;

  static setView(view) {
    this.view = view;
    this.view.state = this.initialState;
    this.onInit();
  }

  static setState(state) {
    this.view.setState(state);
  }

  static onInit() {}
}
