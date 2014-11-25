var expect = require('chai').expect;

// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
// Then write the method that will make that test pass.
describe('#flatten()', function(){
	it('loops over a nested array and returns a new array that is not nested, but contains the same elements as the original array()', function(){
		expect(flatten([[0, 1], [2, 3], [4, 5]])).to.equal([1,2,3,4]);
	});
});

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});