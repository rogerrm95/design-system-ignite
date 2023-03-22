# DESIGN SYSTEM - MÓDULO 5

## O que é?

 - Padrões de Layouts;
 - Documentações dos padrões que seguimos entre o layout entre as diversas aplicações dentro da empresa;

 - Todo e qualquer componente ou elemento visual que pode ser compartilhado em qualquer aplicação da empresa;
 -- Não é uma lib de UI Kit !

 - DS é uma convenção, só deve ser colocado nele, elementos que podem ser reutilizáveis em qualquer aplicação da empresa/contexto;

 - UI KIT: Conjuntos de componentes reaproveitáveis entre aplicações;

 - DS nasce primeiro no design depois é convertido para código;

 - Solid JS:

## Design Systems conhecidos
 
 - Fluent Design System;
 - Uber Base Web;

## TSUP
 - Instalação: npm i tsup -D
 - Ferramenta utilizada para realizar a conversão do código em um pacote JS no qual poderá ser carregado por outras aplicações. (BUILD)
 - Consegue conversar o código para diferentes formatos: Commum JS, ECMAScript Modules ou Require.
 - Mais perfomático que o build normal e utiliza o esbuild;

 - Criar 2 scripts: build e dev

## MonoRepo
 - Conceito: Prática de alocar inúmeros projetos em um único repositório (pasta)
 - Conceito²: Monorepos são um modelo de arquitetura onde temos todas as partes da nossa aplicação (ou até mesmo todo o código fonte da empresa) em um único repositório isoladamente

 - Esta prática é utilizada quando a empresa possui projetos nos quais são dependentes entre si
 
 - Criar um Package Global e configurar ele. Após isso, excluir das subpastas a pasta node_modules

 - Criar uma pasta: ts-config e dentro dela um arquivo base.json e react.json
 -- base.json: Configuração base do Typescript
 -- react.json: Qualquer outro pacote que utilize React

## Turbo Repo
 - Instalação: npm i turbo@latest -D
 - Utilização: Utilizado para 2 proprósitos principais quando esta trabalhando com o monorepo:
 -- 1. Possibilitar a Execução dos script em todos os pacotes ao mesmo tempo, como por exemplo, o script de "dev";
 -- 2. Acelerar o processo de build da aplicação, guardando uma versão em cache conforme a aplicação vai sendo desenvolvida;

 Dicas: remote caching (integração com a vercel, amazon, azure, google etc).

## Changesets
 - Utilizado para quando há pacotes publicos no qual serão disponibilizados pelo npm;
 - Auxilio no controle do versionamento do MonoRepo;
 
 - Instalação: npm i @changesets/cli
 - Configuração: yarn changeset init
 - Configurar scripts: changeset, version-packages e release;
 - Comando: npm run changeset, poderá ser executado por qualquer agente no qual está mantendo aquele repositório ou realizando alguma alteração e a ideia do comando é mencionar as alterações realizadas no repositório;


## Eslint
 - Instalação: npm i -D eslint @rocketseat/eslint-config
 - Nova pasta: eslint-config

# Ferramentas

## React
 - Instalar o react como dependência de 'DESENVOLVIMENTO';
 - Instalaar como produção iria aumentar drasticamente o tamanho do pacote;

 - Instalação: npm i -D react @types/react @types/react-dom

 - No package.json adicionar a seguinte flag nos scripts de build e dev: --external react

 - ComponentProps: Herda/extrai quais são as propriedades que um componente pode receber

## Stitches
 - framework para criação e estilização de componentes em react.
 - CSS-in-JS
 - Suporte ao SSR

 - Termos: Variants

## StoryBook
 - Ferramenta para documentação dos componentes no Front-end.
 - Ideia principal: permitir desenvolver e manipular DS sem a necessidade se saber programação.
 - Permite adicionar Addons(Plugins), exemplo: Acessibilidade, testes(jest, cypress) etc.

 - Observação: documentação recomanda realizar a instalação em um projeto já existente, para que assim durante a instalação, o storybook identifica o tipo do projeto (react, vue, angular) e cria toda estrutura, isso para projetos onde utiliza APENAS 1 tecnologia.

 - Instalação: npx sb init --builder @storybook/builder-vite --type react --use-npm
 - Instalação²: npm i vite @vitejs/plugin-react -D

 - Tema Dark
 -- Criar uma arquivo em .storybook chamado manager.js e adicionar o código com base na documentação da ferramenta.

 - Tipo de Documentação de componentes: Typescript ou MDX

 - Uma das coisas mais relevantes para se documentar além dos componentes, são os tokens (cores, tamanhos de fonts, espaçamento etc);

 ### Storybook Deployer
 - Utilizado para realizar o deploy do design system;
 
 - Instalação: npm i @storybook/storybook-deployer --save-dev
 - Script: criar o script -> "deploy-storybook": "storybook-to-ghpages"

 - Github Page:
  - Criar uma pasta .github/workflows e criar um arquivo deploy.docs.yml antes de subir o commit pro github;
  - OBSERVAÇÃO: importante habilitar a opção de leitura e escrita em 'Workflow permissions' (Actions), para que action consiga realizar o deploy;
  - Após a realização com sucesso do deploy, o github irá criar uma nova branch chamada "gh-pages";
  - Com isto, é necessário acessar Settings > Pages; e trocar a opção Source para 'deploy from a branch selecionando a branch criada acima e salvar;
   

 ### Termos:
 - Story(eis); 
 - StoryObj; 
 - Meta;
 - Args: Propriedades;
 - Extensão MDX: markdown + JSX
 - Decorator (Stotybook);
 - Args e ArgTypes;

### Componentes
 - Ao criar um story (component), além de criar um default, é necessário criar ao menos uma variação do componente para que o storybook não apresente erro/aviso;

 - Fonts: para implementar fonts externas é necessário adicionar os links no arquivo preview-head.html em .storybook;

### Decorators
 - Uma forma de customizar a view responsável por exibir os componentes no navegador. Podendo inserir outros elementos na view sem a necessidade deles serem filhos do componente.

### Addons
 - Acessibilidade: Plugin a11y;

## Geral
 - Criar uma pasta packages / tokens, react e ts-config;
 - Criar um package.json com o comando 'npm init -y';
 - Criar uma pasta SRC em tokens e desenvolver os tokens;
 - Criar um script para limpar cache automatizado;