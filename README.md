# Relatório de Nomes de Cidades

Este projeto gera relatórios de nomes de cidades a partir de um arquivo JSON. Ele utiliza padrões de projeto como Factory Method, Decorator e Strategy, seguindo os princípios SOLID para garantir um código flexível e de fácil manutenção.

## Funcionalidades

- Geração de relatórios em formato HTML.
- Geração de relatórios em formato TXT.
- Suporte para diferentes estilos de relatório HTML.

## Estrutura do Projeto
```bash
.
├── data
│ ├── cidades-1.json
│ ├── cidades-2.json
│ └── cidades.csv
├── requirements
│ ├── 01.txt
│ ├── 02.txt
│ └── 03.txt
├── src
│ ├── AbstractFormater.js
│ ├── AbstractFormatterDecorator.js
│ ├── CitiesReporter.js
│ ├── CitySpanDecorator.js
│ ├── FileReader.js
│ ├── FileReaderSync.js
│ ├── FormaterHTML.js
│ ├── FormaterTXT.js
│ ├── FormatterFactory.js
│ ├── HeaderDecorator.js
│ ├── JSONParser.js
│ └── JSONParserImpl.js
├── test
│ └── test.js
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## Instalação

Clone o repositório:
```sh
git clone https://github.com/ViniciusGR797/arq-projeto1.git
```

```sh
cd arq-projeto1
```

Instale as dependências:
```sh
npm install
```

## Uso

Para gerar um relatório, execute o script `index.js` com o formato desejado (`html` ou `txt`) como parâmetro:

```sh
npm run html
```

Isso gerará um relatório HTML. Para gerar um relatório TXT, execute:

```sh
npm run txt
```

## Testes

Para garantir a consistência das saídas esperadas após as alterações, execute o script de teste:

```sh
npm run test
```

## Padrões de Projeto

### Factory Method

Utilizado para criar diferentes estratégias de formatação (HTML e TXT).

### Decorator
Adiciona diferentes estilos de relatório dinamicamente.

### Strategy
Utilizado para definir diferentes estratégias de formatação de saída.

## Princípios SOLID
### Princípio de Responsabilidade Única (SRP)
Classes FileReader e JSONParser criadas para separar a leitura de arquivos e o parseamento JSON.

### Princípio da Substituição de Liskov (LSP)
Garantido que todos os formatadores implementem a interface AbstractFormater corretamente.

### Princípio da Inversão de Dependência (DIP)
As classes CitiesReporter, FileReader, e JSONParser dependem de abstrações, não de implementações concretas.