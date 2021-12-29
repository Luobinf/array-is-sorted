const assert = require('assert');
const sorted = require('../index');
const expect = require('chai').expect

describe('test array', function() {
    it('should return true', function() {
      assert.equal( sorted([1, 2, 3]), true);
    });

    it('should return false', function() {
        assert.equal( sorted([3, 1, 2]), false);
    });

    it('should throw TypeError, Expected Array, but got others', function(done) {
        function testThrowError() {
            sorted(90)
        }
        expect( testThrowError ).to.throw
        done()
    });

    it('should throw TypeError, Expected Function, but got others', function(done) {
        function testThrowError() {
            sorted([1,2,3], {})
        }
        expect( testThrowError ).to.throw
        done()
    });
  });