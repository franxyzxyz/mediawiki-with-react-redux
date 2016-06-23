# Pocket-wiki

Pocket-wiki is a mini-app that fetch pages via mediawiki API, and user can bookmark pages. This is an experimental SPA with react and redux, and with build-tool webpack.

You can find the presentation slide from [HERE](https://slides.com/francesng/ppocket-wiki-app/live#/)

### Installation
```sh
$ git clone https://github.com/franxyzxyz/mediawiki-with-react-redux.git
$ cd mediawiki-with-react-redux
$ npm install
$ npm start
```

### Tech

* **React** - View rendering
* **Redux** - Manage state
* **jQuery** - Helping JSONP AJAX call
* **node.js** - server
* **Express** - node.js framework
* **lodash** - array/object manipulation (with state change)
* **SASS** styling
* **ES2015** ECMAScript standard
* **babel** compile latest standard of javascript
* **webpack** build-tool for compiling assets


### App Structure
```sh
├── app.js
├── node_modules
├── package.json
├── src
    ├── app
        ├── actions
        ├── components
        ├── containers
        ├── fonts
        ├── index.jsx
        ├── reducers
        ├── styles
        └── utilities
    └── build
        ├── assets
        ├── bundle.js
        └── index.html
└── webpack.config.js
```

### Data Flow
```sh
Action -> Reducer -> View
            ^         |
            |         |
          Action <-----
```

