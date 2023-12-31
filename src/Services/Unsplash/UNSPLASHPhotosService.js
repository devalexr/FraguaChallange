import UNSPLASHService from './UNSPLASHService';

export default class UNSPLASHPhotosService extends UNSPLASHService {
  static async getPhotos(page = null) {
    return await this.get('/photos', {page: page});
  }
  static async search(query, page = null) {
    return await this.get('/search/photos', {query: query, page: page});
  }
}
