'use strict';

// modules

const millis = require('./index');

// private variables

const functionNames = Object.keys(millis);

const check = {
  get: () => Number.prototype.BE_MOERIKI_MILLIS_IS_EXTENDED,
  set() {
    Number.prototype.BE_MOERIKI_MILLIS_IS_EXTENDED = true;
  },
  unset() {
    delete Number.prototype.BE_MOERIKI_MILLIS_IS_EXTENDED;
  },
};

// exports

function register() {
  if (check.get()) {
    throw new Error('extending Number twice');
  }

  functionNames.forEach((modifier) => {
    if (Number.prototype[modifier]) {
      throw new Error('cannot overwrite prototye');
    }
    Number.prototype[modifier] = function modifyNumber() {
      return millis[modifier](this);
    };
  });

  check.set();

  return reset;
}

function reset() {
  if (check.get() === undefined) {
    return register;
  }
  functionNames.forEach((modifier) => {
    delete Number.prototype[modifier];
  });
  check.unset();
  return register;
}

module.exports = register();
