/*
Given a array of N 32 bit integers . 
You need to find the product of array of each i without considering 
i th element  . where 0<=i<=n-1 . see sample test case for better understanding
you are not allowed to use division operator . it is given that product will fit in 
32 bit integer.
output1 = 120 60 40 30 24
output2 = 14 21 6
*/
let arr = [1, 2, 3, 4, 5];
let n = 5;
console.log(productOfArray(arr, n));
let arr2 = [3, 2, 7];
let n2 = 3;
console.log(productOfArray(arr2, n2));
function productOfArray(arr, n) {
  //Write code here
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  let array = new Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = product / arr[i];
  }
  return array;
}
//not do
