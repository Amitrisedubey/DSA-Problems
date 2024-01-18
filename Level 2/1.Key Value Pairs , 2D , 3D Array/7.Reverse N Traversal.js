/*
 N Traversal
 Description:-You are given a matrix of size NxN . find the N traversal of the matrix.
 input = 123 456 789
 output= 1475369
 */
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
nReverseTraversal(matrix);
function nReverseTraversal(matrix) {
  //Write code here
  let temp = "";
  for (let i = 0; i < matrix.length; i++) {
    temp += matrix[i][0] + " ";
  }
  for (let i = matrix.length - 2, j = 1; i >= 0, j < matrix.length; i--, j++) {
    temp += matrix[i][j] + " ";
  }
  for (let i = 1; i < matrix.length; i++) {
    temp += matrix[i][matrix.length - 1] + " ";
  }

  console.log(temp);
}
