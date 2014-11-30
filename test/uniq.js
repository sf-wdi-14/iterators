var expect = require('chai').expect;

describe('uniq()', function() {
	it('returns all unique elements of an array', function() {
		expect(uniq([2,2,4,6,2,8])).to.equal('[2,4,6,8]');
	});
});

// Write a test for a method called 'uniq' that returns all unique elements
// of an array, i.e. without duplicates.
// Then write the method that will make that test pass.
var uniq = function(array) {
	var newArray = [];

	newArray.push(array[i]);

	for(var i = 0; i<array.length; i++) {
		
	}
}