
var sillySum=function(myArray){
	var count=0;
	for(i=0;i<myArray.length;i++){
		count+=myArray[i]*i;
		
	}
	return count;
}

sillySum([1,2,3,4]);