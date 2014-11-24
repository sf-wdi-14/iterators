var expect = require('chai').expect;

// Write a test for a method called 'indexOf' that returns the index of
// a given element of an array.
// Then write the method that will make that test pass.

describe('#indexOf()', function() {
	it('returns the index of a given element in an array', function() {
		expect(indexOf(1, [1, 2, 3])).to.equal(0);
		expect(indexOf(2, [1, 2, 3])).to.equal(1);
		expect(indexOf(3, [1, 2, 3])).to.equal(2);
	});
});

var indexOf = function(value, array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === value) return i;
	}
}
