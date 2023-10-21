import UNSPLASHService from './UNSPLASHService';

export default class UNSPLASHTopicsService extends UNSPLASHService {
  static async getTopics(page = null) {
    return await this.get('/topics', {page: page});
  }
}
