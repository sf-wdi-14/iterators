// returns true or false if a string is the same backwards and forewards

var expect = require('chai').expect;

describe('#palidr()', function() {
	it('checks string and returns true if string is palindrome else false', function() {
		expect(palidr("mom")).to.equal(true);
		expect(palidr("racecar")).to.equal(true);
	});
	it('checks string and returns true if string is palindrome else false', function() {		
		expect(palidr("joe")).to.equal(false);
	});
});



var palidr = function(str)  {
	
	for (i=str.length; i>=0; i--)  {
		
		var a = ((str.length-1)-i);
		
		if (str[i]!=str[a])  {
			
			return false;
		}
			}
return true;			
};