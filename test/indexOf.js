var expect = require('chai').expect;

// Write a test for a method called 'indexOf' that returns the index of
// a given element of an array.
// Then write the method that will make that test pass.

var indexOf= function(arr, value){
	return arr.indexOf(value);
};

describe('#indexOf()', function(){
	it('returns the correct index of an element of a given array', function(){
		expect(indexOf([1,2,3,4], 2)).to.equal(1);
	});
});


