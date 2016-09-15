'use strict';

// exports

function multiply(multiplicand) {
  return function curriedMultiply(multiplier) {
    if (multiplier == null) {
      multiplier = 1;
    }
    return multiplier * multiplicand;
  };
}

module.exports = { multiply };
