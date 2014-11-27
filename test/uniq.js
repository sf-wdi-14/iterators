var expect = require('chai').expect;

// Write a test for a method called 'map' that loops over an array
// and returns the result of each operation in a new array.
// Then write the method that will make that test pass.

// describe('#functionName()', function() {
// 	it('what function does in english', function() {
// 		expect(functionName().to.equal();
// 	});
// });


describe('#map()', function() {
	it('returns an array of results', function() {
		var array = [1,2,3];
		var result = map(array, function(a) {
			return a += 1;
		});
		expect(JSON.stringify(result)).to.equal('[2,3,4]');
	});
});

var map = function(array, callback) {
	var results = [];
		for (i=0;i<array.length; i++) {
			var outcome = callback(array[i]);
			results.push(outcome);
	}
	return results;
}


// Write a test for a method called 'uniq' that returns all unique elements
// of an array, i.e. without duplicates.
// Then write the method that will make that test pass.

describe('#uniq()', function() {
	it('returns all unique elements of an array, i.e. without duplicates', function() {
		var array = [1,22,333,4,555];
		var result = uniq(array);
		});
		expect(JSON.stringify(result)).to.equal('[1,4]');
	});
});

var uniq = function(arr)  {
		var arr1 = [];
		var arr2 = [];
		for(var i=0;i<var.length;i++) {
			for (var j = i+1; j<arr.length; j++) {
				if (arr[i] === arr[j]) {
					arr1.push(arr[j]);
				}
					else arr2.push(arr[j]);
			}
			}
		};

		}
	return newArray;
	}
}