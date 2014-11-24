var expect = require('chai').expect;

// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
// Then write the method that will make that test pass.

describe('#flatten()', function() {
	it('turns a two-dimensional array into a one-dimensional array', function() {
		var nestedArray = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12]
		];

		var expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		var expectedString = JSON.stringify(expectedArray);

		var result = flatten(nestedArray);
		expect(JSON.stringify(result)).to.equal(expectedString);
	});
});

var flatten = function(array) {
	return [].concat.apply([], array);
}
