/*
Given five positive integers, find the minimum and maximum values that can be 
calculated by summing exactly four of the five integers. Then print the respective 
minimum and maximum values as a single line of two space-separated long integers.
Sample Input
1 2 3 4 5
Sample Output
10 14
*/

let arr = [1, 2, 3, 4, 5];
minmaxSum(arr);
function minmaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let minSum = sum - max;
  let maxSum = sum - min;
  console.log(minSum + " " + maxSum);
}
