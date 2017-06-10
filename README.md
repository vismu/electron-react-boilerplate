# electron-react-boilerplate

### A Boilerplate for Scalable Cross-Platform Desktop Apps

<br/>

[![Build Status][travis-image]][travis-url]
[![Appveyor Build Status][appveyor-image]][appveyor-url]
[![Dependency Status][david_img]][david_site]
[![Github Tag][github-tag-image]][github-tag-url]
[![Join the chat at https://gitter.im/electron-react-boilerplate/Lobby](https://badges.gitter.im/electron-react-boilerplate/Lobby.svg)](https://gitter.im/electron-react-boilerplate/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![OpenCollective](https://opencollective.com/electron-react-boilerplate/backers/badge.svg)](#backers)
[![OpenCollective](https://opencollective.com/electron-react-boilerplate/sponsors/badge.svg)](#sponsors)

[![React](/internals/img/react-padded-90.png)](https://facebook.github.io/react/)
[![Webpack](/internals/img/webpack-padded-90.png)](https://webpack.github.io/)
[![Redux](/internals/img/redux-padded-90.png)](http://redux.js.org/)
[![React Router](/internals/img/react-router-padded-90.png)](https://github.com/ReactTraining/react-router)
[![Flow](/internals/img/flow-padded-90.png)](https://flowtype.org/)
[![ESLint](/internals/img/eslint-padded-90.png)](http://eslint.org/)
[![Jest](/internals/img/jest-padded-90.png)](https://facebook.github.io/jest/)
[![Yarn](/internals/img/yarn-padded-90.png)](https://yarnpkg.com/)

[Electron](http://electron.atom.io/) application boilerplate based on [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux), [React Router](https://github.com/reactjs/react-router), [Webpack](http://webpack.github.io/docs/), [React Transform HMR](https://github.com/gaearon/react-transform-hmr) for rapid application development

## Screenshot

![Electron Boilerplate Demo](https://cloud.githubusercontent.com/assets/3382565/10557547/b1f07a4e-74e3-11e5-8d27-79ab6947d429.gif)

## Install

* **Note: requires a node version >= 6 and an npm version >= 3.**
* **If you have installation or compilation issues with this project, please see [our debugging guide](https://github.com/chentsulin/electron-react-boilerplate/issues/400)**

First, clone the repo via git:

```bash
git clone --depth=1 https://github.com/chentsulin/electron-react-boilerplate.git your-project-name
```

And then install dependencies.
**ProTip**: Install with [yarn](https://github.com/yarnpkg/yarn) for faster and safer installation:

```bash
$ cd your-project-name && npm install
```

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a server sends hot updates to the renderer process:

```bash
$ npm run dev
```


