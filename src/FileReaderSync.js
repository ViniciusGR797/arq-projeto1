import fs from 'node:fs';
import FileReader from './FileReader.js';

export default class FileReaderSync extends FileReader {
  read(filename) {
    return fs.readFileSync(filename, 'utf8');
  }
}