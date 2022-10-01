"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NOTE: This code has not been converted to TypeScript yet
var arrays_js_1 = require("./utilities/arrays.js");
var numbers_js_1 = require("./utilities/numbers.js");
var strings_js_1 = require("./utilities/strings.js");
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var arrSum = (0, arrays_js_1.addArr)(numArr);
var mixArr = (0, arrays_js_1.concatArr)(numArr, wordArr);
var myNum = '15' % 2;
// results of function calls
console.log((0, arrays_js_1.cut3)(mixArr));
console.log((0, numbers_js_1.sum)(arrSum, myNum));
console.log((0, strings_js_1.capitalize)('the quick brown fox'));
console.log((0, numbers_js_1.multiply)(5, 8));
console.log((0, arrays_js_1.lgNum)(mixArr));
