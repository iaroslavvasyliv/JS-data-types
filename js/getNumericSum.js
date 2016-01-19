'use strict';

function getNumericSum(arr) {

	var item;
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		
		item = parseFloat(arr[i]);

		if (!isNaN(item)) {
			sum +=item;
		}
	}
	return sum;
}
console.log(getNumericSum(['2','567','55']));