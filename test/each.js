var expect = require('chai').expect;

// Write a test for a method called 'each' that loops over an array and
// returns the array.
// Then write the method that will make that test pass.

describe('#map()', function(){
	it('returns an array of results', function(){
		var array = [1,2,3];
		var result = map(array,function(a){
			return a = a+1;
		});
		expect(JSON.stringify(result)).to.equal('[2,3,4]');
	});
});

function map (array) {
	for (var i = 0; i < array.length; i++) {
		array[i]= array[i]+1;
	};
	return array;
};