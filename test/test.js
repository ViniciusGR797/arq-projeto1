import { strict as assert } from 'assert';
import FormaterHTML from '../src/FormaterHTML.js';
import FormaterTXT from '../src/FormaterTXT.js';
import CitiesReporter from '../src/CitiesReporter.js';

describe('CitiesReporter', function() {
  const filename = './data/cidades-2.json';
  
  it('should generate HTML report', function() {
    const reporter = new CitiesReporter({ formaterStrategy: new FormaterHTML() });
    const output = reporter.report(filename);
    
    assert.ok(output.includes('<title>Relatório de Nomes de Cidades</title>'));
    assert.ok(output.includes('<li>Abatiá</li>'));
  });

  it('should generate TXT report', function() {
    const reporter = new CitiesReporter({ formaterStrategy: new FormaterTXT() });
    const output = reporter.report(filename);
    
    assert.ok(output.includes('Relatório de Nomes de Cidades'));
    assert.ok(output.includes('- Abatiá'));
  });
});
