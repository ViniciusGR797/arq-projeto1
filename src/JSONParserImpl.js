import JSONParser from './JSONParser.js';

export default class JSONParserImpl extends JSONParser {
  parse(jsonString) {
    return JSON.parse(jsonString);
  }
}