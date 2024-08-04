import AbstractFormatterDecorator from './AbstractFormatterDecorator.js';

export default class HeaderDecorator extends AbstractFormatterDecorator {
  output(cities) {
    let result = super.output(cities);
    return result.replace(
      '<body>',
      '<body>\n<header><h1>Relatório de Nomes de Cidades</h1></header>'
    );
  }
}