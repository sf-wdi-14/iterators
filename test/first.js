var expect = require('chai').expect;

describe('#first()', function() {
	it('returns the first element of a given array', function() {
		expect(first([1,2,3])).to.equal(1);
	});
});

// Write a test for a method called 'first' that returns the first
// element of an array.
// Then write the method that will make that test pass.

function first(array) {
	return array[0];;
};