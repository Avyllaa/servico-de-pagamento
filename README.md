# Serviço de Pagamento

Projeto desenvolvido para a disciplina de Automação de Testes de Software.

## Funcionalidades

* Realizar pagamentos.
* Armazenar pagamentos em uma lista.
* Classificar pagamentos automaticamente:

  * "cara" para valores maiores que 100.
  * "padrão" para valores menores ou iguais a 100.
* Consultar o último pagamento realizado.

## Tecnologias utilizadas

* JavaScript (Node.js)
* Mocha
* Node Assert

## Estrutura do Projeto

```text
src/
 └── ServicoDePagamento.js

test/
 └── servicoDePagamento.test.js
```

## Instalação

```bash
npm install
```

## Execução dos testes

```bash
npm test
```

## Resultado esperado

Todos os testes devem ser executados com sucesso:

```text
5 passing
```
