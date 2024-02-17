/*
For each testcase , you are given N integers and your task is to write a program that
print 1 Wihtout quotes if there are 2 integers present in the array where sum is k else Print -1 without quotes
output = 1
*/
let arr = [3, 4, 0, 2, 7];
let n = 5;
let k = 2;
console.log(suchPairReturns(arr, n, k));
let arr2 = [2, 4, 0, 2, 7];
let n2 = 5;
let k2 = 2;
console.log(suchPairReturns(arr2, n2, k2));
function suchPairReturns(arr, n, k) {
  //Write code here
  arr.sort();
  let left = 0;
  let right = n - 1;
  let sum;
  let count = 0;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum == k) {
      count++;
    }
    if (count == 2) {
      return -1;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return 1;
}
