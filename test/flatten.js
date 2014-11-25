var expect = require('chai').expect;


describe('#flatten()', function(){
	it('returns flattened array', function(){
		expect(JSON.stringify(flatten([[1,2,3],[2,4,5]]))).to.equal('[1,2,3,2,4,5]')
	});
});

var flatten= function(arr){
	var newArr= [];
	for(i=0; i<arr.length; i++){
		if (arr[i].length > 1){
		for(j=0; j<arr[i].length; j++){
			newArr.push(arr[i][j]);
		}
	}
	else{
		newArr.push(arr[i]);
		}
	}
	return newArr;
};
// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
// Then write the method that will make that test pass.
