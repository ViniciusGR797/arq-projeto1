import FormaterHTML from './FormaterHTML.js';
import FormaterTXT from './FormaterTXT.js';

export default class FormatterFactory {
  static createFormatter(type) {
    switch (type) {
      case 'html':
        return new FormaterHTML();
      case 'txt':
        return new FormaterTXT();
      default:
        throw new Error('Unknown format type');
    }
  }
}