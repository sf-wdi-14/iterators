var expect = require('chai').expect;

describe('#uniq()', function() {
	it('returns all unique elements of an array', function() {
		expect(uniq([1,1,1,2,3,3,4])).to.equal('[1,2,3,4]');
	});
});

// Write a test for a method called 'uniq' that returns all unique elements
// of an array, i.e. without duplicates.
// Then write the method that will make that test pass.

var uniq = function(array) {
	var uniqArray = [];
	for (var i = 0, len = array.length; i < len; i++) {
		if (array[i] !==)	
	}
};