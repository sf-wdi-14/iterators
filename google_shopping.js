// 1.

var data = require("./products.json")

var newData=data["items"];
var count=0;

for (i=0;i<=(newData.length);i++){
	if (newData[i]["kind"]=='shopping#product'){
		count++;
	}
}
console.log(count);
/// Answer 25

//2.
var data = require("./products.json")

var newData=data["items"];
var count=0;
for (i=0;i<=(newData.length-1);i++){
	if (newData[i]["product"]["inventories"][0]["availability"]=='backorder'){
		count++;
	}
}
console.log(count);
/// Answer 2

//3.

