/*
You are given a rectangular matrix of size N x M.
You have to print the spiral traversal of the matrix.
output = 9 5 1 2 3 4 8 12 11 10 6 7
*/
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
let N = 3;
let M = 4;
console.log(spiralTraversal_IV(matrix, N, M));
let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
let N2 = 4;
let M2 = 3;
console.log(spiralTraversal_IV(matrix2, N2, M2));
function spiralTraversal_IV(matrix, N, M) {
  //Write code here
  let top = 0;
  let bottom = N - 1;
  let left = 0;
  let right = M - 1;
  let temp = "";
  let count = 0;
  while (count < N * M) {
    for (let i = bottom; i >= top; i--) {
      temp += matrix[i][left] + " ";
      count++;
    }
    left++;
    if (count >= N * M) break;
    for (let i = left; i <= right; i++) {
      temp += matrix[top][i] + " ";
      count++;
    }
    top++;
    if (count >= N * M) break;
    for (let i = top; i <= bottom; i++) {
      temp += matrix[i][right] + " ";
      count++;
    }
    right--;
    if (count >= N * M) break;
    for (let i = right; i >= left; i--) {
      temp += matrix[bottom][i] + " ";
      count++;
    }
    bottom--;
  }
  return temp;
}
