/*
In this challenge, you are required to calculate and print the sum
of the elements in an array, keeping in mind that some of those 
integers may be quite large.

Return the integer sum of the elements in the array.
output = 5000000015
*/
let N = 5;
let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(arr, N));
function aVeryBigSum(arr, N) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i];
  }
  return sum;
}
