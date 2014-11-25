var expect = require('chai').expect;


describe('#last()', function(){
	it('returns the last element of the array', function(){
		expect(last([2,3,4,5])).to.equal(5);
	});
});


var last= function(arr){
	return arr[arr.length-1]
};
// Write a test for a method called 'last' that returns the last element
// of an array.
// Then write the method that will make that test pass.
