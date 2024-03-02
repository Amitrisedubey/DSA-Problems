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
  let count = 0;
  for (let i = 0; i < size; i++) {
    let subarray = 0;
    for (let j = i; j < size; j++) {
      if (subarray + arr[j] < m) {
        count++;
        subarray += arr[j];
      } else {
        break;
      }
    }
  }
  return count;
}
