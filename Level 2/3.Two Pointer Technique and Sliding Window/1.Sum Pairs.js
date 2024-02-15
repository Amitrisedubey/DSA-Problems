//sum of arr[i] +arr[j] == K
let arr = [3, 5, 9, 2, 8, 10, 11];
let N = 7;
let K = 17;
console.log(countSuchPairs(arr, N, K));
function countSuchPairs(arr, N, K) {
  // Write code here
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = N - 1;
  let sum;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === K) {
      return "Yes";
    } else if (sum < K) {
      left++;
    } else {
      right--;
    }
  }
  return "No";
}
