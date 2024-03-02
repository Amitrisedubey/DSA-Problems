/*
You are given a Square matrix of size N x N.
You have to print the spiral traversal of the matrix.
output = 3 6 9 8 7 4 1 2
*/
let size = 3;
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralTraversal_V(matrix, size));
function spiralTraversal_V(matrix, size) {
  //Write code here
  let left = 0;
  let right = size - 1;
  let top = 0;
  let bottom = size - 1;
  let res = "";
  for (let i = top; i <= bottom; i++) {
    res += matrix[i][right] + " ";
  }
  right--;
  for (let i = right; i >= left; i--) {
    res += matrix[bottom][i] + " ";
  }
  bottom--;
  for (let i = bottom; i >= top; i--) {
    res += matrix[i][left] + " ";
  }
  left++;
  for (let i = left; i <= right; i++) {
    res += matrix[top][i] + " ";
  }
  return res;
}
