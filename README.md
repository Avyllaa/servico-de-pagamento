# Serviço de Pagamento

## Sobre o projeto
Este projeto foi desenvolvido originalmente na disciplina de Programação para Automação de Testes e foi utilizado como base para o trabalho da disciplina de Integração Contínua.

A aplicação consiste em um serviço simples de pagamento desenvolvido em Node.js, contendo testes automatizados implementados com Mocha.

---

## Objetivo deste trabalho
O objetivo deste trabalho foi configurar uma pipeline de Integração Contínua utilizando GitHub Actions para automatizar a execução dos testes do projeto.

A solução implementada contempla:

- Execução automática a cada push realizado no repositório;
- Execução manual através do GitHub Actions;
- Execução agendada utilizando cron;
- Geração de relatório de testes em formato JUnit XML;
- Armazenamento do relatório como artefato da pipeline;
- Documentação da solução utilizada.

---

## Estrutura do projeto

- `src/ServicoDePagamento.js` - implementação do serviço.
- `test/servicoDePagamento.test.js` - testes automatizados.
- `.github/workflows/ci.yml` - configuração da pipeline.
- `reports/` - diretório utilizado para armazenar os relatórios de execução.

---

## Funcionamento da pipeline
A pipeline foi configurada utilizando GitHub Actions.

Durante a execução são realizados os seguintes passos:

1. Download do código-fonte do repositório;
2. Configuração do ambiente Node.js;
3. Instalação das dependências do projeto;
4. Execução dos testes automatizados;
5. Geração do relatório de testes;
6. Publicação do relatório como artefato da execução.

---

## Gatilhos configurados
A pipeline pode ser executada de três formas:

### Push
A execução ocorre automaticamente sempre que um novo commit é enviado para o repositório.

### Execução Manual
Pode ser iniciada diretamente pela aba Actions do GitHub utilizando o recurso `workflow_dispatch`.

### Execução Agendada
Foi configurada uma execução periódica utilizando a funcionalidade `schedule`.

---

## Relatórios de teste
Os testes utilizam o pacote `mocha-junit-reporter`, responsável pela geração do arquivo:

`reports/junit.xml`

Esse relatório é armazenado como artefato da execução para consulta posterior.

---

## Execução local
Instalar dependências:

```
npm install
```
Executar os testes:

```
npm test
```
Executar os testes gerando relatório:

```
npm run test:report
```

---

## Resultado
A pipeline foi executada com sucesso no GitHub Actions, realizando a execução dos testes e a geração do relatório solicitado pela atividade.
