'use strict';

function getPensionersName(arr) {
    var namesArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age > 65) {
            namesArr.push(arr[i].name);
        }
    }
    return namesArr;
}
console.log(getPensionersName([{name: 'Vasya', age: 13}, {name: 'Vasiliy', age: 66}]));
