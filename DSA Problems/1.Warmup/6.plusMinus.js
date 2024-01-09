/*
Given an array of integers, calculate the ratios of its elements that are positive,
negative, and zero. Print the decimal value of each fraction on a new line
with 6 places after the decimal.
example = 
arr =[1,1,0,-1,-1]
there are n = 5 elements, two positive, two negative and one zero. 
Theirs ratios are 2/5 = 0.4000000, 2/5 = 0.4000000 , 1/5 = 0.2000000
Results are printed as
0.400000
0.400000
0.200000


Print the ratios of positive, negative and zero values in the array. 
Each value should be printed on a separate line with 6 digits after the decimal. 
The function should not return a value.
Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
*/
let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] === 0) {
      zero++;
    } else {
      negative++;
    }
  }
  let positiveCount = (positive / arr.length).toFixed(6);
  let negativeCount = (negative / arr.length).toFixed(6);
  let zeroCount = (zero / arr.length).toFixed(6);
  console.log(positiveCount);
  console.log(negativeCount);
  console.log(zeroCount);
}
