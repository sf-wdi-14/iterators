var expect = require('chai').expect;

// Write a test for a method called 'last' that returns the last element
// of an array.
// Then write the method that will make that test pass.
describe('#last()', function() {
	it('returns the last element of the array', function() {
		expect(last([1,2,3])).to.equal(3);
	});
});

var last = function(array) {
	// for(var i=0; i<array.length; i++) {
	// 	if (i === array.length-1) return array[i];
	// }
	return array[array.length-1];
}