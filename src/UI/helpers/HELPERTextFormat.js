import moment from 'moment';
import 'moment/locale/es';
export default class HELPERTextFormat {
  static formatDT(date) {
    const S_format = String(date).includes(':')
      ? 'dddd, D MMM YYYY - h:mm A'
      : 'dddd, D MMM YYYY';

    let time = moment(date);
    let format = time.format(S_format);
    return format.charAt(0).toUpperCase() + format.slice(1);
  }
  static formatTimeAgo(date) {
    let time = moment(date);
    let format = time.fromNow();
    return format.charAt(0).toUpperCase() + format.slice(1);
  }

  static formatNumber(n) {
    return n.toLocaleString('en-US');
  }
}
