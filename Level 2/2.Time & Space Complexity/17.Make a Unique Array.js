/*
Given a sorted array A of length N, removes the duplicates from the array.
output = 2,7,9
*/
let arr = [2, 2, 2, 7, 9];
let n = 5;
console.log(uniqueArray(arr, n));
function uniqueArray(arr, n) {
  // Write code here
  let obj = {};
  for (let i = 0; i < n; i++) {
    obj[arr[i]] = 1;
  }
  let array = "";
  for (let key in obj) {
    array += key + " ";
  }
  return array;
}
