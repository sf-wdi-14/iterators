var expect = require('chai').expect;

// Write a test for a method called 'each' that loops over an array and
// returns the array.
describe('#each()', function() {
	it('loops over an array and returns the array', function() {
		expect(JSON.stringify(each([2,3,4]))).to.equal('[2,3,4]')
	});
});




// Then write the method that will make that test pass.
var each = function(array) {
	result = [];
	for (var i = 0; i<array.length; i++) {
		result.push(array[i]);
	}

	return result;
}