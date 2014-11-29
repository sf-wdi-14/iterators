var expect = require('chai').expect;

describe('#flatten()', function() {
	it('returns a new flattened array from nested array', function() {
		expect(flatten(["Parent",["Child"]])).to.equal('["Child"]');
	});
});

// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
// Then write the method that will make that test pass.

var  flatten = function(nestedArray) {
	var flattenedArray = [];

	for (var i = 0, len = nestedArray[1].length; i < len; i++) {
		flattenedArray.push(nestedArray[1][i]);
	}

	return JSON.stringify(flattenedArray);
};