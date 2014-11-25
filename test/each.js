var expect = require('chai').expect;

describe('#each()', function(){
	it('returns the array with the function passed done to each element', function(){
		expect(JSON.stringify(each([2,3,4], function(a){return a = a*2}))).to.equal('[4,6,8]')
	});
});

var each= function(arr, callback){
	for(i=0; i<arr.length; i++){
		arr[i]= callback(arr[i]);
	}
	return arr;
};

// Write a test for a method called 'each' that loops over an array and
// returns the array.
// Then write the method that will make that test pass.
