var expect = require('chai').expect;

// Write a test for a method called 'indexOf' that returns the index of
// a given element of an array.
describe('#indexOf()', function() {
	it('returns the index of a given element', function() {
		expect(indexOf([1,"pie",55],"pie")).to.equal(1)
	});
});

// Then write the method that will make that test pass.
var indexOf = function(array,element) {
	for (var i = 0; i < array.length; i++) {
		if (element === array[i]) return i;
	}
}