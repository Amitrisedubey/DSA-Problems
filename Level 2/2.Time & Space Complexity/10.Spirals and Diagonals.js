/*
You are given an integer n. the next line is an array A which contains n*n
elements. the spiral traversal of a square matrix of dimension (n*n) results 
in the given array. 
Calculate the sum of all elements which are on the diagonal of the square matrix
output = 25
*/
let n = 3;
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralAndDiagonals(arr, n));
let n2 = 4;
let arr2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(spiralAndDiagonals(arr2, n2));
function spiralAndDiagonals(arr, n) {
  //Write code here
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i][i];
  }
  for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
    if (i !== j) {
      sum += arr[i][j];
    }
  }
  return sum;
}
