// Concatenate two arrays
type numOrStrAr = number|string;
const concatArr = (arr1: numOrStrAr[], arr2: numOrStrAr[]) :numOrStrAr[] => {
  return [...arr1, ...arr2];
};

// Add numbers in an array

const addArr = (arr: number[]):number => {
  let total: number = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

// Find the largest number in an array
const lgNum = (arr:numOrStrAr[]):number => {
  let largest = 0 as number;
  arr.forEach((x) => {
    if (x > largest) {
      largest = x as number;
    }
  });
  return largest;
};

// Remove the 3rd item from an array
const cut3 = (arr:numOrStrAr[]):numOrStrAr[] => {
  arr.splice(2, 1);
  return arr;
};

export {concatArr, addArr, lgNum, cut3};

// module.exports = {
//   concatArr,
//   addArr,
//   lgNum,
//   cut3,
// };
