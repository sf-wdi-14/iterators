var expect = require('chai').expect;

// Write a test for a method called 'last' that returns the last element
// of an array.
// Then write the method that will make that test pass.

describe('last()', function() {
  it('returns the last element of an array', function () {
  	expect(last([8,7,4,5])).to.equal(5);
  }); 
});

var last = function(array) {
  return array[array.length -1];
};
