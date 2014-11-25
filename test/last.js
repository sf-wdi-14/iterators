var expect = require('chai').expect;

describe('#last()', function() {
	it('returns the last element of a given array', function() {
		expect(last([1,2,3,5,4,3,2,7,6])).to.equal(6);
	});
});

// Write a test for a method called 'last' that returns the last element
// of an array.
// Then write the method that will make that test pass.

var last = function(array) {
	return array[array.length-1];
}
