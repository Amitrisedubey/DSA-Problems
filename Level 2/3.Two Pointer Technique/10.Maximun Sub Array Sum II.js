/*
You are give an array of size n and window size K
find the the sum of all subarrays of size K 
output = 700
output = 39
*/
let arr = [100, 200, 300, 400];
let K = 2;
let N = 4;
console.log(maxSubArraySum(arr, K, N));
let arr2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let K2 = 4;
let N2 = 9;
console.log(maxSubArraySum(arr2, K2, N2));
function maxSubArraySum(array, K, N) {
  //Write code here
  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += array[i];
  }
  let currentSum = sum;
  for (let i = K; i < N; i++) {
    currentSum = currentSum - array[i - K] + array[i];
    sum = Math.max(sum, currentSum);
  }
  return sum;
}
// Sliding Window
// first loop k times
// second loop n-k times
// Big oh N
