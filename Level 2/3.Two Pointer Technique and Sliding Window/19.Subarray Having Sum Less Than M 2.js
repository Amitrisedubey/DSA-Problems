/*
Given an array of size n with positive numbers . find the total number of subarrays that have sum < m.
Print the number of subarray whose sum is less than m
output = 5
*/
let arr = [1, 5, 1, 3, 2];
let size = 5;
let m = 5;
console.log(sumLessThanM(arr, size, m));
function sumLessThanM(arr, size, m) {
  //Write code here
  let windowSum = 0;
  let high = 0;
  let count = 0;
  for (let low = 0; low < size; low++) {
    while (windowSum < m && high < size) {
      windowSum += arr[high];
      high++;
      count++;
    }
    windowSum = windowSum - arr[low];
  }
  return count;
} 
