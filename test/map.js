var expect = require('chai').expect;

// Write a test for a method called 'map' that loops over an array
// and returns the result of each operation in a new array.
// Then write the method that will make that test pass.

describe('#map()', function(){
	it('returns an array of results', function (){
		var array= [1,2,3];
		var result= map(array, function(a){
			return a += 1;
		});
		expect(JSON.stringify(result)).to.equal('[2,3,4]')
	});
});

// var map= function(array, callback){
// 	var oneMore= array.map(function(num){
// 		return num + 1;
// 	});
// 	return oneMore;
// }

var map= function(array, callback){
	var newArr= [];
	for (i=0; i<array.length; i++){
		newArr.push(callback(array[i]));
	}
	return newArr;
}
