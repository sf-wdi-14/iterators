var expect = require('chai').expect;

// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
describe('#flatten()', function() {
	it('returns a flat array with all values from the original array', function() {
		expect(JSON.stringify(flatten([[1,2,3],[4,2],[2,3,4]]))).to.equal('[1,2,2,2,3,3,4,4]')
	});
});

// Then write the method that will make that test pass.
var flatten = function(array) {
    result = [];
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
            result.push(array[i][j]);
		}
	}
	return result.sort();
};
