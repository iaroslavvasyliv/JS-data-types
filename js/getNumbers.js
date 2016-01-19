'use strict';

function getNumbers(arr) {
	var numbersArr = [];
	var item;

	for (var i = 0; i < arr.length; i++) {
		item = parseFloat(arr[i]);

		if (!isNaN(item)) {
			numbersArr.push(item);
		}
	}
	return numbersArr;
}
console.log(getNumbers(['2','567','f']));