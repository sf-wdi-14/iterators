var expect = require('chai').expect;

// Write a test for a method called 'each' that loops over an array and
// returns the array.
// Then write the method that will make that test pass.

describe('#each()', function() {
	it('iterates over each element', function() {
		var array = [1, 2, 3];
		var otherArray = [];

		each(array, function(a) {
			otherArray.push(a);
		});

		expect(JSON.stringify(array)).to.equal(JSON.stringify(otherArray));
	});

	it('returns the array it is passed', function() {
		var result = each([1, 2, 3], function() {});
		expect(JSON.stringify(result)).to.equal('[1,2,3]');
	});
});

var each = function(array, callback) {
	for (var i = 0; i < array.length; i++) callback(array[i]);

	return array;
}
