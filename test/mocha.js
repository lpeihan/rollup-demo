const { sum, mul } = require('../src/math');
const { should, expect, assert } = require('chai');

should();
sum(2, 3).should.equal(5);

expect(sum(2,  3)).to.equal(5);

assert.equal(mul(2, 3), 6);