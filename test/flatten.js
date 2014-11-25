var expect = require('chai').expect;

// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
// Then write the method that will make that test pass.

describe('#flatten()', function(){
	it('returns a new single-dimensional array from a nested array', function(){
		expect(flatten([1,2,3,[4,5,6]])).to.equal([1,2,3,4,5,6]);
	});
});


function flatten (array) {
	var flatArray = [];
	flatArray = flatArray.concat.apply(flatArray,array);
	return flatArray;
}