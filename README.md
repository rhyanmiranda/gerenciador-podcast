# Podcast Episodes API

Esta é uma API simples construída com Node.js nativo e TypeScript que permite listar todos os episódios de todos os podcasts e buscar episódios de um único podcast pelo nome usando uma query string.

## Funcionalidades

- Listar todos os episódios de todos os podcasts.
- Buscar episódios de um único podcast pelo nome usando uma query string.

## Requisitos

- Node.js v20 ou superior
- npm (ou yarn)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/rhyanmiranda/gerenciador-podcast.git
    cd gerenciador-podcast
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

## Scripts

- `dist`: Compila o projeto TypeScript para JavaScript.
- `start:dist`: Inicia a aplicação usando o código compilado.
- `start:dev"`: Inicia a aplicação em modo de desenvolvimento.
- `start:watch"`: Inicia a aplicação em modo watch.

## Uso

### Para listar todos os episódios de todos os podcasts

Faça uma requisição GET para:
GET /api/list

### Para buscar episódios de um único podcast pelo nome

Faça uma requisição GET para:
GET /api/episodes?p=nome-do-podcast

## Dependências
`@tsconfig/node20`: Configuração de TypeScript para Node.js 20.
`@types/node`: Tipos do Node.js para TypeScript.
`tsup`: Empacotador para TypeScript.
`tsx`: Executor de arquivos TypeScript.
`typescript`: Compilador TypeScript.

## Contribuição
Sinta-se à vontade para fazer um fork deste repositório e enviar pull requests. 



