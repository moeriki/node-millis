'use strict';

const millis = require('../index');

// tests

it('should turn milleseconds into seconds', () => {
  expect(millis.inSeconds(2000)).toBe(2);
});
