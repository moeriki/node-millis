'use strict';

// modules

const register = require('register-toggle');

const millis = require('./index');

// exports

module.exports = register({
  extend: Number.prototype,
  properties: Object.keys(millis)
    .reduce((props, modifier) => Object.assign(props, {
      [modifier]() {
        return millis[modifier](this);
      },
    }), {}),
});
