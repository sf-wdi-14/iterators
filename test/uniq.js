var expect = require('chai').expect;

// Write a test for a method called 'uniq' that returns all unique elements
// of an array, i.e. without duplicates.
// Then write the method that will make that test pass.

describe('#uniq', function() {
	it('returns all unique elements of an array', function() {
		expect(uniq([1,1,2,2,7,7])).to.equal([1,2,7]);
	});
});

// Feature code

var uniq = function (array) {
	var newArray = [];
	var i = 0;
	newArray.push(array[i]);		
	
	for (i < array.length; i++) {
		if (!newArray[i] === array[i]) {
			newArray.push(array[i]);
		}
	}
	
}
