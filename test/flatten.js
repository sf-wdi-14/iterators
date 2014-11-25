var expect = require('chai').expect;

// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
// Then write the method that will make that test pass.

describe('#flatten()', function() {
	it('returns a flattened array', function() {
		var result = JSON.stringify(flatten([9,[1,1,2],[2,7,7]]));
		expect(result).to.equal('[9,1,1,2,2,7,7]');
	});
});

//Feature code

var flatten = function (array) {
	newArray = [];

	for (var idx1 = 0; idx1 < array.length; idx1++) {
		
		if (Array.isArray(array[idx1])) {
		    for (var idx2 = 0; idx2 < array[idx1].length; idx2++) {
		    	newArray.push(array[idx1][idx2]);
		    }
		} else {
			newArray.push(array[idx1]);
		}
	}
	return newArray;
}