import AbstractFormater from './AbstractFormater.js';

export default class AbstractFormatterDecorator extends AbstractFormater {
  constructor(formatter) {
    super();
    this._formatter = formatter;
  }

  output(cities) {
    return this._formatter.output(cities);
  }
}