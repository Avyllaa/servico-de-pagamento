# Serviço de Pagamento

Projeto desenvolvido para a disciplina de Automação de Testes de Software.

## Visão geral

Este repositório contém um serviço simples de pagamento implementado em Node.js com testes automatizados usando Mocha. Além do código e testes, este projeto contém uma pipeline GitHub Actions que executa os testes automaticamente e publica os relatórios de teste como artefatos.

## Conteúdo

- `src/ServicoDePagamento.js` — implementação do serviço.
- `test/servicoDePagamento.test.js` — testes unitários com Mocha.
- `package.json` — scripts e dependências de desenvolvimento.
- `reports/` — saída de relatórios (gerada pela pipeline e localmente).
- `.github/workflows/ci.yml` — workflow de CI (GitHub Actions).

---

## Integração Contínua (CI)

Integração Contínua é uma prática de desenvolvimento onde alterações no código-fonte são automaticamente construídas e testadas, permitindo detectar regressões cedo. Neste projeto, usamos GitHub Actions para executar os testes automaticamente em cada alteração e em execuções agendadas ou manuais.

### O que é GitHub Actions

GitHub Actions é a plataforma de CI/CD integrada ao GitHub que permite definir fluxos de trabalho (workflows) que são acionados por eventos do repositório (push, pull request, agendamentos, execuções manuais, etc.). Os workflows são descritos em YAML e ficam na pasta `.github/workflows/`.

---

## Como a pipeline funciona

O workflow principal é `.github/workflows/ci.yml` e realiza os seguintes passos:

1. Faz checkout do repositório usando `actions/checkout@v4`.
2. Configura a versão do Node.js usando `actions/setup-node@v4` (Node 18).
3. Instala dependências (usa `npm ci` se houver `package-lock.json`, caso contrário `npm install`).
4. Garante que a pasta `reports/` exista.
5. Executa os testes usando o script `npm run test:report`, que invoca Mocha com o `mocha-junit-reporter` para gerar `reports/junit.xml`.
6. Faz upload da pasta `reports/` como um artefato chamado `test-report`. Este upload é configurado para rodar mesmo quando os testes falham (passo com `if: always()`), garantindo que relatórios estejam disponíveis para análise.

---

## Gatilhos usados pelo workflow

O workflow está configurado com três gatilhos principais:

- `push`: executa a pipeline a cada push (em qualquer branch por padrão).
- `workflow_dispatch`: permite a execução manual do workflow pela interface do GitHub.
- `schedule`: executa a pipeline em um horário agendado (cron). O cron pode ser ajustado conforme necessidade.

---

## Relatórios de teste

O formato principal de relatório escolhido é JUnit XML (`reports/junit.xml`). Este formato é ideal para integração com pipelines e analisadores de CI. Opcionalmente, é possível adicionar `mochawesome` para gerar HTML legível para humanos.

O relatório JUnit é gerado pelo `mocha-junit-reporter` e armazenado na pasta `reports/`.

---

## Como executar localmente

1. Instale dependências:

```bash
npm install
```

2. Executar os testes normalmente (sem gerar relatório):

```bash
npm test
```

3. Executar os testes e gerar o relatório JUnit (arquivo `reports/junit.xml`):

```bash
npm run test:report
```

4. Verifique o conteúdo da pasta `reports/` para o arquivo `junit.xml`.

Nota: o script `test:report` usa `mocha-junit-reporter` e criará o arquivo `./reports/junit.xml`.

---

## Como visualizar os artefatos na GitHub Actions

1. No repositório no GitHub, acesse a aba `Actions`.
2. Selecione a execução do workflow desejada (pela data ou pelo nome da branch).
3. Na página da execução, procure a seção `Artifacts` (geralmente na parte superior-direita ou no painel de execução) e clique no artefato `test-report` para baixar.
4. Extraia o ZIP e abra `reports/junit.xml` ou qualquer relatório HTML gerado.

---

## Observações e dicas

- É recomendado commitar um `package-lock.json` para permitir `npm ci` reproduzível no CI. Atualmente, o workflow escolhe `npm ci` quando o lockfile estiver presente.
- Se desejar relatórios HTML legíveis localmente, considere adicionar `mochawesome` e um script para gerar HTML a partir dos resultados do Mocha.

---

## Arquivos alterados/novos

Verifique os arquivos modificados/gerados neste commit:

- `package.json` (adicionado `mocha-junit-reporter` em `devDependencies` e o script `test:report`).
- `.github/workflows/ci.yml` (novo workflow de CI).
- `reports/.gitkeep` (marcador para a pasta `reports/` — é criada durante o CI ou localmente quando executa o script).

---

Se quiser que eu também gere um relatório HTML (`mochawesome`) e o integre ao workflow, posso adicionar isso em um passo complementar.

