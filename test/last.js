var expect = require('chai').expect;

// Write a test for a method called 'last' that returns the last element
// of an array.
// Then write the method that will make that test pass.

describe('#last()', function(){
	it('returns the last element of a given array', function (){
		expect(last([1,2,3])).to.equal(3);
	});
});

function last (array){
	position = array.length-1;
	return array[position];
}