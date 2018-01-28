# [Workshop de React Native para iniciantes](https://www.meetup.com/pt-BR/Frontend-Dev-SP-Meetup/events/246295953/)

## Tutorial do setup
Tutorial passo a passo de como configurar um ambiente de desenvolvimento de apps em [React Native](https://facebook.github.io/react-native/).

## Índice
- [Introdução](#introdução)
- [Node](#node)
- [NPM](#npm)
  - [Yarn](#yarn)
- [Create React Native App (CRNA)](#create-react-native-app-crna)
- [Expo](#expo)
- [Rodando](#rodando)
- [Dúvidas](#dúvidas)

## Introdução
Este tutorial tem como objetivo ensinar como configurar um ambiente de desenvolvimento de apps em **React Native**.
A documentação oficial para tal encontra-se em [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html).
## Node
O primeiro requisito é possuir [Node](https://nodejs.org) instalado. Nós podemos fazer o download do Node [aqui](https://nodejs.org/en/download/).

Após concluir a instalação, nós podemos verificar se o mesmo foi instalado corretamente, rodando o seguinte comando no terminal:
```shell
$ node -v
```
Deverá aparecer o número da versão instalada. Por exemplo, `v9.4.0`.
## NPM
Ao instalar o Node, o [npm](https://www.npmjs.com/) também é instalado. O `npm` é o `Node Package Manager`, também conhecido como `Gerenciador de Pacotes do Node`. É a partir do `npm` que instalamos as dependências dos nossos projetos Node/React/React Native. Para verificarmos se o `npm` foi instalado corretamente, nós podemos rodar o seguinte comando no terminal:
```shell
$ npm -v
```
Deverá aparecer o número da versão instalada. Por exemplo, `5.6.0`.
### Yarn
Uma excelente alternativa ao `npm` é o [yarn](https://github.com/yarnpkg/yarn). O `yarn` trabalha de uma forma um pouco diferente da do `npm` e acaba sendo mais prático e mais rápido, por isso vamos optar por usá-lo. Para instalarmos o `yarn`, devemos rodar o seguinte comando no terminal: 
```shell
$ npm i -g yarn
```
Que signifa "_npm, instala pra mim, globalmente, o pacote yarn?_". Em distribuições Linux, provavelmente será necessário o uso do `sudo`:
```shell
$ sudo npm i -g yarn
```
Para verificarmos se o `yarn` foi instalado corretamente, nós podemos rodar o seguinte comando no terminal:
```shell
$ yarn -v
```
Deverá aparecer o número da versão instalada. Por exemplo, `1.3.2`.
## Create React Native App (CRNA)
Como este é um curso introdutório, vamos fazer uso de uma ferramente que abstrai boa parte da complexidade do setup: [Create React Native App](https://github.com/react-community/create-react-native-app). O `CRNA` é um "_**project starter ready to go**_", ou seja, com apenas alguns comandos no terminal, temos o ambiente de desenvolvimento configurado, com app rodando no celular. Porém é necessário possuir o [Expo App](https://expo.io/) instalado no device.
`CRNA + Expo` é a combinação perfeita para quem quer começar a codar os apps **agora**!
Para instalarmos o **Create React Native App**, podemos rodar o seguinte comando no terminal:
```shell
$ npm i -g create-react-native-app
```
Para verificarmos se o `create-react-native-app` foi instalado corretamente, nós podemos rodar o seguinte comando no terminal:
```shell
$ create-react-native-app --version
```
Deverá aparecer a seguinte mensagem: `create-react-native-app version: 1.0.0`.
## Expo
O próximo passo é instalar o **Expo** no celular: [Expo client](https://expo.io/tools#client)
## Rodando
Para iniciar um novo projeto é bem simples. Basta rodar os seguintes comando no terminal:
```shell
$ create-react-native-app meu-app-incrivel
```
Em poucos segundos nós teremos um diretório configurado e pronto pra rodar nosso app!
Quando o setup terminar, é só navegarmos até a pasta e iniciarmos o projeto:
```shell
$ cd meu-app-incrivel
$ npm start
```
Agora vamos abrir o **Expo App** (no celular) e usá-lo para fazer a leitura do QR code que apareceu no terminal.
Pronto, o nosso mais novo app já está rodando.
## Dúvidas
Em caso de dúvidas ou problemas para fazer o setup, por favor, abrir uma issue [aqui](https://github.com/jgcmarins/react-native-cryptocurrency/issues) que responderei assim que possível. Muito obrigado.
