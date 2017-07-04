{
  "name": "react-progressbar",
  "version": "1.4.6",
  "description": "Basic progress bar in React",
  "main": "lib/index.js",
  "scripts": {
    "build": "babel -d lib/ src/",
    "prepublish": "npm run build",
    "test": "node_modules/.bin/babel-node node_modules/.bin/babel-istanbul cover node_modules/.bin/_mocha -- test/*.js",
    "coverage": "istanbul cover _mocha -- --ui bdd -R spec -t 5000;open ./coverage/lcov-report/index.html",
    "cover": "node_modules/.bin/babel-node node_modules/.bin/babel-istanbul cover node_modules/.bin/_mocha",
    "coveralls": "npm run cover -- --report lcovonly && cat ./coverage/lcov.info | coveralls"
  },
  "devDependencies": {
    "babel-cli": "^6.18.0",
    "babel-core": "^6.18.2",
    "babel-istanbul": "^0.11.0",
    "babel-polyfill": "^6.16.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",
    "babel-preset-stage-1": "^6.16.0",
    "coveralls": "^2.11.15",
    "enzyme": "^2.6.0",
    "expect": "^1.20.2",
    "jsdom": "^9.8.3",
    "jsdom-global": "^2.1.0",
    "mocha": "^3.2.0",
    "mocha-lcov-reporter": "^1.2.0",
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "react-test-renderer": "^15.5.4",
    "sinon": "^1.17.6"
  },
  "babel": {
    "presets": [
      "es2015",
      "react"
    ]
  },
  "keywords": [
    "react-component",
    "react",
    "progress",
    "bar"
  ],
  "browserify": {
    "transform": [
      [
        "reactify",
        {
          "harmony": true
        }
      ]
    ]
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:abdennour/react-progressbar.git"
  },
  "bugs": {
    "url": "https://github.com/abdennour/react-progressbar/issues"
  },
  "homepage": "https://github.com/abdennour/react-progressbar",
  "author": "Param Aggarwal",
  "license": "MIT",
  "peerDependencies": {
    "react": "^15.0.1"
  }
}
