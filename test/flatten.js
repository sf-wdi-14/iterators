var expect = require('chai').expect;

describe('#flatten()', function() {
	it('returns a flattened array with the same elements as the original array', function() {
		expect(JSON.stringify(flatten([1,2],[2,3,4],[5]))).to.equal('[1,2,2,3,4,5]');
	});
});

// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
// Then write the method that will make that test pass.
var flatten = function(array) {
	var result=[];
	for (var i=0; i<array.length; i++) {
		
	}
}