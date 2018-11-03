const { sum, mul ,min } = require('../src/math');
const { should, expect, assert } = require('chai');

// should();
// sum(2, 3).should.equal(5);

// expect(sum(2,  3)).to.equal(5);

// assert.equal(mul(2, 3), 6);

should();

describe('#math', () => {
    describe('sum', () => {
        it('should return 5 when sum(2, 3)', () => {
            sum(2, 3).should.equal(5);
        });

        it('should return -1 when sum(2, -3)', () => {
            sum(2, -3).should.equal(-1);
        });
    });

    describe('mul', () => {
        it('should return -6 when mul(2, -3)', () => {
            mul(2, -3).should.equal(-6);
        });
    });

    describe('min', () => {
        it('should return 2 when min(2, 3)', () => {
            min(2, 3).should.equal(2);
        });

        it('should return 0 when min(1, 0)~', () => {
            min(1, 0).should.equal(0);
        });
    });
});