var expect = require('chai').expect;

// Write a test for a method called 'uniq' that returns all unique elements
// of an array, i.e. without duplicates.
// Then write the method that will make that test pass.

describe('#uniq()', function(){
	it('returns all unique elements of an array', function(){
		expect(uniq[4,6,7,4,4,6,8]).to.equal([4,6,7,8]);
	}):
});



var uniq = function(arr,func) {
        func = func || function (a, b) {
            return a*1 - b*1;
        };
        arr = arr.sort(func);
        var ret = [arr[0]];
        for (var i = 1; i < arr.length; i++) {
            if (func(arr[i-1],arr[i]) != 0) 
                ret.push(arr[i]);
            }
        }
        return ret;
    }