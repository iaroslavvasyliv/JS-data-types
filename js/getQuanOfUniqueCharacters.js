'use strict';

function getQuanOfUniqueCharacters(arr) {
    var charactersArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (charactersArr.indexOf(arr[i]) == -1) {
                charactersArr.push(arr[i]);
            }
        }
    return charactersArr.length;
}
console.log(getQuanOfUniqueCharacters('qwer qwe qw'));