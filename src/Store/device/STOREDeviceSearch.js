import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_DEVICE_SEARCH = 'STORE_DEVICE_SEARCH';

export default class STOREDeviceSearch {
  static async add(query) {
    query = query.trim();
    const key = this.slugify(query);
    let item = {
      key: key,
      value: query,
      created_at: Math.floor(Date.now() / 1000),
    };
    let JSON_search_history = await this.get();

    //remove duplicated values
    JSON_search_history = JSON_search_history.filter(t => {
      return t.key !== key;
    });

    JSON_search_history.push(item);

    this._save(JSON_search_history);
  }

  static async _save(JSON_search_history) {
    try {
      await AsyncStorage.setItem(
        STORE_DEVICE_SEARCH,
        JSON.stringify(JSON_search_history),
      );
    } catch (error) {
      console.error(
        'Error al guardar datos en la memoria del dispositivo',
        error.toString(),
      );
    }
  }

  static async get() {
    let JSON_search_history = [];

    try {
      const search_history = await AsyncStorage.getItem(STORE_DEVICE_SEARCH);
      if (search_history) {
        JSON_search_history = JSON.parse(search_history);
      }
    } catch (error) {
      console.error(
        'Error obtener datos de la memoria del dispositivo',
        error.toString(),
      );
    }

    return JSON_search_history;
  }

  static slugify(str) {
    return String(str)
      .normalize('NFKD') // split accented characters into their base characters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim() // trim leading or trailing whitespace
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-'); // remove consecutive hyphens
  }
}
