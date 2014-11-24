var expect = require('chai').expect;

// Write a test for a method called 'last' that returns the last element
// of an array.
// Then write the method that will make that test pass.

describe('#last()', function() {
	it('returns the last element of an array', function() {
		expect(last([1, 2, 3])).to.equal(3);
	});
});

var last = function(array) {
	return array[array.length - 1];
}
