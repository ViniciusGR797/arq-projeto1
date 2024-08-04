import AbstractFormatterDecorator from './AbstractFormatterDecorator.js';

export default class CitySpanDecorator extends AbstractFormatterDecorator {
  output(cities) {
    let result = super.output(cities);
    return result.replace(/<li>([^<]+)<\/li>/g, '<li><span class="cidade">$1</span></li>');
  }
}