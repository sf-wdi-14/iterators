var expect = require('chai').expect;

// Write a test for a method called 'uniq' that returns all unique elements
// of an array, i.e. without duplicates.
// Then write the method that will make that test pass.

describe('#uniq()', function (){
	it('returns all unique values from an array', function (){
		expect(uniq(["apple", "apple", 7, 8, 8, 9, 4, 4, 2])).to.equal(["apple", 7, 8, 9, 4, 2].sort());
	})
});

function uniq (array) {
	array.sort();
	var newArray = [array[0]];
	var holder;
	for (var i = 0; i < array.length; i++) {
		if (array[i]!==newArray[i]) {
			newArray.push(array[i]);
		}
	};
	console.log(newArray);
	return array;
}