var expect = require('chai').expect;


describe('#uniq()', function(){
	it('returns correct unique elements in array', function(){
		expect(JSON.stringify(uniq([2,3,4,4,4,4,5]))).to.equal('[2,3,5]')
	});
});


var uniq= function(arr){
	var newArr= [];
	for (i= 0; i<arr.length; i++){
		var current= arr[i]
		var count= 1;
		for(j=0; j<arr.length; j++){
			if((i !== j)&&(arr[i]===arr[j])){
				count++
			}
		}
		if(count === 1){
			newArr.push(arr[i])
		}
	}
	return newArr;
};
// Write a test for a method called 'uniq' that returns all unique elements
// of an array, i.e. without duplicates.
// Then write the method that will make that test pass.
