'use strict';

function getQuanOfUniqueElements(arr) {
    var elementsArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (elementsArr.indexOf(arr[i]) == -1) {
            elementsArr.push(arr[i]);
        }
    }
    return elementsArr.length;
}
console.log(getQuanOfUniqueElements([55, 55, 11, 11, 'j', '12', '12']));