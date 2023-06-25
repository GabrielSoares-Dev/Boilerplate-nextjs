# Boilerplate Next.js

Este é um boilerplate para projetos Next.js, que inclui uma configuração básica para começar a desenvolver rapidamente. Ele utiliza várias tecnologias e bibliotecas populares, como React, Tailwind CSS, Jest, Cypress, MSW, Zustand e muito mais.

## Funcionalidades

- Configuração básica do Next.js para desenvolvimento e produção.
- Integração com o Tailwind CSS para estilização rápida e fácil.
- Suporte a TypeScript para um desenvolvimento mais robusto.
- Integração com o React Query para gerenciamento de estado e comunicação com a API.
- Integração com o React Hook Form para criação de formulários com validação.
- Integração com o Zod para validação de esquemas.
- Suporte ao ESLint para linting e formatação do código.
- Suporte ao Jest para testes unitários e de integração.
- Suporte ao Cypress para testes de ponta a ponta (end-to-end).
- Suporte ao MSW para simulação de chamadas de API durante os testes.
- Integração com o Zustand para gerenciamento de estado simplificado.
- Configuração pré-definida do Husky para hooks de pré-commit.
- Uso do Commitizen para padronização das mensagens de commit.
- Configuração do Docker para facilitar a execução e o ambiente de desenvolvimento.

## Requisitos

Antes de executar o projeto, certifique-se de ter as seguintes dependências instaladas em seu ambiente de desenvolvimento:

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Docker (opcional)

## Executando o projeto

1. Clone este repositório em sua máquina local:

git clone https://github.com/seu-usuario/boilerplate-nextjs.git

2. Navegue até o diretório do projeto:

cd boilerplate-nextjs

3. Instale as dependências do projeto usando o npm:

npm i

4. Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento executando o seguinte comando:

npm run dev 


5. O servidor de desenvolvimento será iniciado e estará disponível em `http://localhost:3000`. Você pode acessar essa URL em seu navegador para visualizar o projeto em execução.

## Testes

O projeto inclui configurações para testes unitários, testes de integração e testes de ponta a ponta. Aqui estão os detalhes sobre as ferramentas de teste utilizadas:

### Jest

O Jest é um framework de teste popular para JavaScript, que oferece suporte a testes unitários, testes de integração e testes de snapshot. Ele é configurado neste projeto para ajudar você a escrever e executar testes de forma fácil e eficiente.

- Executar todos os testes:
  npm test

- Executar os testes em modo de observação (watch mode):
  npm run test:watch

- Executar os testes silenciosamente (sem saída detalhada):

npm run test:silent

- Gerar relatório de cobertura de testes:

npm run test:coverage

### Cypress

O Cypress é uma ferramenta de teste de ponta a ponta (end-to-end) que permite simular a interação do usuário com o aplicativo e realizar verificações automatizadas. Ele é configurado neste projeto para que você possa escrever e executar testes de ponta a ponta de forma fácil e eficiente.

- Executar os testes do Cypress no navegador:

npm run cypress:run



By Gabriel Soares Maciel