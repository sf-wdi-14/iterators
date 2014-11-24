var expect = require('chai').expect;

// Write a test for a method called 'uniq' that returns all unique elements
// of an array, i.e. without duplicates.
// Then write the method that will make that test pass.

describe('#uniq()', function() {
	it('returns the unique elements of an array', function() {
		expect(JSON.stringify(uniq([1, 1, 2, 3]))).to.equal('[1,2,3]');
	});
});

var uniq = function(array) {
	var results = [];

	for (var i = 0; i < array.length; i++) {
		if (results.indexOf(array[i]) === -1) results.push(array[i]);
	}

	return results;
}
