var expect = require('chai').expect;

// Write a test for a method called 'map' that loops over an array
// and returns the result of each operation in a new array.
// Then write the method that will make that test pass.

describe('#map()', function() {
	it('returns an array of the results from an operation', function() {
		var result = map([1, 2, 3], function(a) {
			return a += 1;
		});

		result = JSON.stringify(result);

		expect(result).to.equal('[2,3,4]');
	});
});

var map = function(array, callback) {
	var results = [];

	for (var i = 0; i < array.length; i++) {
		var result = callback(array[i]);
		results.push(result);
	}

	return results;
}
