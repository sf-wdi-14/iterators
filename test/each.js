var expect = require('chai').expect;

// Write a test for a method called 'each' that loops over an array and
// returns the array.
// Then write the method that will make that test pass
describe('#each()', function() {
	it('loops over an array and returns the array', function() {
		expect(JSON.stringify(each([1,2,3]))).to.equal('[1,2,3]')
	});
});

var each = function(array) {
	var result=[];

	for (var i=0; i < array.length; i++) {
		result.push(array[i]);
	}
	return result;
}