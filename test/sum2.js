// write a function that sums 2 numbers.

var expect = require('chai').expect;

describe('#sum2()', function() {
	it('sums two numbeers', function() {
		expect(sum2(1,2)).to.equal(3);
	});
});


var sum2 = function(a,b) {
	var sum = a+b;
	return sum;
}
