// NOTE: This code has not been converted to TypeScript yet
import { lgNum, addArr, concatArr, cut3 } from './utilities/arrays.js';
import { sum, divide, multiply, square, subtract } from './utilities/numbers.js';
import { capitalize, concat, lowerCase, upperCase } from './utilities/strings.js';

const numArr: number[] = [3, 4, 5, 6];
const wordArr: string[] = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum: number = addArr(numArr);
const mixArr = concatArr(numArr, wordArr);
const myNum: number = ('15' as unknown)as number % 2;

// results of function calls
console.log(cut3(mixArr));
console.log(sum(arrSum, myNum));
console.log(capitalize('the quick brown fox'));
console.log(multiply(5 , 8));
console.log(lgNum(mixArr));