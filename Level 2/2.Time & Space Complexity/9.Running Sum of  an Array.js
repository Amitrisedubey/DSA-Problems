/*
You are given an array A containing N integers . find the running sum of the array.
the running sum of the array is defined as the sum of all the elements of the array that exist 
before the current element . including the current element 
output = 1,3,6,10,15
*/
let arr = [1, 2, 3, 4, 5];
let n = 5;
console.log(runningSumofArray(arr, n));
let arr2 = [5, 6, 7];
let n2 = 3;
console.log(runningSumofArray(arr2, n2));
function runningSumofArray(arr, n) {
  //Write code here
  let array = new Array(n).fill(0);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    array[i] += sum;
  }
  return array;
}
