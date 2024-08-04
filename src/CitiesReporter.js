import FileReaderSync from './FileReaderSync.js';
import JSONParserImpl from './JSONParserImpl.js';

export default class CitiesReporter {
  constructor({ formaterStrategy }) {
    this._formaterStrategy = formaterStrategy;
    this._fileReader = new FileReaderSync();
    this._jsonParser = new JSONParserImpl();
  }

  _read(filename) {
    this._cities_json = this._fileReader.read(filename);
  }

  _parseJSON() {
    this._cities = this._jsonParser.parse(this._cities_json);
  }

  report(filename) {
    this._read(filename);
    this._parseJSON();
    return this._formaterStrategy.output(this._cities);
  }
}
