/*
 N Traversal
 Description:-You are given a matrix of size NxN . find the N traversal of the matrix.
 input = 123 456 789
 output= 7415963
 */
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
nTraversal(matrix);
function nTraversal(matrix) {
  //Write code here
  let temp = "";
  for (let i = matrix.length - 1; i >= 0; i--) {
    temp += matrix[i][0] + " ";
  }
  for (let i = 1; i < matrix.length; i++) {
    temp += matrix[i][i] + " ";
  }
  for (let i = matrix.length - 2; i >= 0; i--) {
    temp += matrix[i][matrix.length - 1] + " ";
  }
  console.log(temp);
}
