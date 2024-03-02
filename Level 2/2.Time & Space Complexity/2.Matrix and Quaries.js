/*
You are given a matrix of size NxM and two types of quaries are to be performed on this matrix 
the two types of quaries are
q = 1 for this type of query , the matrix is to be traversed as shown in fig 1
1 2 3  6 5 4  7 8 9

q = 2 for this type of query , the matrix is to be traversed as shown in fig 1
3 2 1  4 5 6  9 8 7
*/
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let n = 3,
  m = 3;
console.log(matrixAndQuaries(arr, n, m));
function matrixAndQuaries(arr, n, m) {
  // Write code here
  let q1 = "";
  let q2 = "";
  let left = 0;
  let right = n - 1;
  //q1
  for (let i = 0; i <= right; i++) {
    q1 += arr[left][i] + " ";
  }
  left++;
  for (let i = right; i >= 0; i--) {
    q1 += arr[left][i] + " ";
  }
  left++;
  for (let i = 0; i <= right; i++) {
    q1 += arr[left][i] + " ";
  }
  // q2
  left = 0;
  for (let i = right; i >= 0; i--) {
    q2 += arr[left][i] + " ";
  }
  left++;
  for (let i = 0; i <= right; i++) {
    q2 += arr[left][i] + " ";
  }
  left++;
  for (let i = right; i >= 0; i--) {
    q2 += arr[left][i] + " ";
  }
  return [q1, q2];
}
