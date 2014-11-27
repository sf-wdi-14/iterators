var expect = require('chai').expect;

// Write a test for a method called 'indexOf' that returns the index of
// a given element of an array.
// Then write the method that will make that test pass.


describe('#indexOf()', function() {
	it('returns the index of a given element', function() {
		expect(indexOf([1,2,3],2)).to.equal(1);
	});
});

var indexOf = function(a,x)  {
	for (i=0; i<a.length; i++)  {
		if (x ===a[i]) {
			return i;
		}
	}
}
