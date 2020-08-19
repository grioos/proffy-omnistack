
<h1 align="center" >
    <img alt="Logo Proffy" src="/.github/screenshots/logo.png" />
</h1>

<h3 align="center">
    📝 Plataforma de educação para conectar professores com alunos.
</h3>

<p align="center">
  <img alt="GitHub contagem de linguagens" src="https://img.shields.io/github/languages/count/grioos/proffy-omnistack?color=%2304D361">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/grioos/proffy-omnistack">

  <a href="https://github.com/grioos/README-proffy-omnistack/commits/master">
    <img alt="GitHub último commit" src="https://img.shields.io/github/last-commit/grioos/proffy-omnistack?color=%4d0000">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-8622f8">
   <a href="https://github.com/grioos/proffy-omnistack/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/grioos/proffy-omnistack?style=social">
  </a>

</p>

<h1 align="center">
    <img alt="NextLevelWeek#02" title="#NextLevelWeek#02" src="/.github/screenshots/home-page.png" />
</h1>

<h4 align="center"> 
	🚧  Proffy 📚 Concluído 🚧
</h4>

<p align="center">
	<a href="#-sobre-o-projeto">Sobre</a> •
 	<a href="#-funcionalidades">Funcionalidades</a> •
	<a href="#-layout">Layout</a> • 
 	<a href="#-como-executar-o-projeto">Como executar</a> • 
  	<a href="#-tecnologias">Tecnologias</a> • 
 	<a href="#-autor">Autor</a> • 
 	<a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

📚 Proffy - A proposta do projeto é uma aplicação que possa ligar quem deseja aprender, com quer ensinar, de uma forma simples e prática.

Projeto desenvolvido durante a **NLW - Next Level Week#02** oferecida pela [Rocketseat](https://rocketseat.com.br/).

---

## ⚙️ Funcionalidades

- [x] Professores podem se cadastrar na plataforma web enviando:
  - [x] Uma imagem do professor
  - [x] Nome, bio e whatsapp
  - [x] E o horário e dia para dar sua aula 
  - [x] Além de selecionar a matéria e o custo da sua hora/aula. Entre as matérias de escolha estão: 
    - Artes
    - Biologia
    - Ciências
    - Educação física
    - Geografia
    - História
    - Matemática
    - Português
    - Química

- [x] Os alunos tem acesso ao aplicativo, onde podem:
  - [x] Navegar pelo app para ver os professores cadastrados
  - [x] Entrar em contato com o professor através do WhatsApp

---

## 🎨 Layout

###  Mobile

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/.github/screenshots/landing-mobile.png" width="200px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/.github/screenshots/give-classes-mobile.png" width="200px">
  
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/.github/screenshots/teacher-list-mobile.png" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/.github/screenshots/study-page.png" width="400px">
	
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="/.github/screenshots/teacher-register.png" width="400px">
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend

```bash

# Clone este repositório
$ git clone https://github.com/grioos/proffy-omnistack

#  Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy-omnistack

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm i

# Execute a aplicação 
$ npm start

# O servidor inciará na porta:5500 - acesse http://localhost:3333 
```

#### 🧭 Rodando a aplicação web

```bash

# Clone este repositório
$ git clone https://github.com/grioos/proffy-omnistack

# Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy-omnistack

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm i

# Execute a aplicação
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

#### 📱 Rodando a aplicação mobile

```bash

# Clone este repositório
$ git clone https://github.com/grioos/proffy-omnistack

# Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy-omnistack

# Vá para a pasta da aplicação Front End
$ cd mobile

# Instale as dependências
$ npm i

# Execute a aplicação
$ npm start

# Uma página com QR code abrirá onde você pode scanear com seu aparelho ou abrir com seu emulador

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[React Dom](https://pt-br.reactjs.org/docs/react-dom.html)**
-   **[React Scripts](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts)**

> Veja o arquivo  [package.json](https://github.com/grioos/proffy-omnistack/blob/master/web/package.json)

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[Ts-node](https://github.com/TypeStrong/ts-node)**

> Veja o arquivo  [package.json](https://github.com/grioos/proffy-omnistack/blob/master/server/package.json)

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Native Maps](https://github.com/react-native-community/react-native-maps)**
-   **[React Dom](https://github.com/facebook/react/tree/master/packages/react-dom)**
-   **[React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler)**
-   **[React Native Reanimated](https://github.com/software-mansion/react-native-reanimated)**
-   **[React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)**
-   **[React Native Screens](https://github.com/software-mansion/react-native-screens)**
-   **[Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/)**
-   **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Expo Status Bar](https://www.npmjs.com/package/expo-status-bar)**
-   **[Expo Location](https://docs.expo.io/versions/latest/sdk/location/)**
-   **[Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)**

> Veja o arquivo  [package.json](https://github.com/grioos/proffy-omnistack/blob/master/mobile/package.json)
---
## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 🦸 Autor

 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/60109015?s=460&u=941726645c23518f8cbcb9fca84ea7becc0508c5&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Gabriel Rios</b></sub> 🚀
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-grioos-black?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/grioos/)](https://www.linkedin.com/in/grioos/) 
[![Gmail Badge](https://img.shields.io/badge/-gabriel.al.rio@gmail.com-black?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabriel.al.rio@gmail.com)](mailto:gabriel.al.rio@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Gabriel Rios 👋🏻 [Entre em contato!](https://www.linkedin.com/in/grioos/)
