var expect = require('chai').expect;

// Write a test for a method called 'uniq' that returns all unique elements
// of an array, i.e. without duplicates.
describe('#uniq()', function() {
	it('returns all unique elements from an array', function() {
		expect(JSON.stringify(uniq([1,1,2,2,3,4,4,5,6,6]))).to.equal('[1,2,3,4,5,6]')
	});
});

// Then write the method that will make that test pass.
var uniq = function(array) {
	array.sort(function(a,b) {return a-b; } );
	uniques=[array[0]];
	for (var i = 1; i < array.length; i++)
		if (array[i]!==array[i-1]) {
			uniques.push(array[i]);
		}
	return uniques;
}

/*
function uniq (array) {
	var holder;
	var newArray = [];
	array = array.sort();
	for (var i = 0; i < array.length; i++) {
		if (array[i]===array[i+1]) {
			holder = array.pop(i,i+1);
			newArray.push(holder);
		}
	};
	return array;
}

var uniqu = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				//flip out
			}
		}
	}
}
*/




