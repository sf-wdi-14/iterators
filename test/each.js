var expect = require('chai').expect;

describe('#each()', function() {
	it('returns the entered array', function() {
		expect(each(["1","2","3"])).to.equal('["1","2","3"]');
	});
});

// Write a test for a method called 'each' that loops over an array and
// returns the array.
// Then write the method that will make that test pass.

var each = function(array) {
	var newArray = [];
	for (var i = 0, len = array.length-1; i <= len; i++) {
		newArray.push(array[i])
	}
	newArray = JSON.stringify(newArray);
	return newArray;
};