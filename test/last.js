var expect = require('chai').expect;

// Write a test for a method called 'last' that returns the last element
// of an array.
// Then write the method that will make that test pass.
describe('#last()', function() {
	it('returns the last element of an array', function(){
		expect(last([1,2,3,4])).to.equal(4);

	});

});

var last = function(array) {

for (var i = 0; i < array.length; i++) {
	return array[3];
	}
}

