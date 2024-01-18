/*
You are given a square matrix of size N x N.
You have to print the spiral traversal of the matrix.
output = 963214785
output = 4213
*/
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let size = 3;
let matrix2 = [
  [1, 2],
  [3, 4],
];
let size2 = 2;
console.log(spiralTraversal_III(matrix, size));
console.log(spiralTraversal_III(matrix2, size2));
function spiralTraversal_III(matrix, size) {
  //Write code here
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  let temp = "";
  let count = 0;
  while (count < size * size) {
    for (let i = bottom; i >= top; i--) {
      temp += matrix[i][right] + " ";
      count++;
    }
    right--;
    if (count >= size * size) break;
    for (let i = right; i >= left; i--) {
      temp += matrix[top][i] + " ";
      count++;
    }
    top++;
    if (count >= size * size) break;
    for (let i = top; i <= bottom; i++) {
      temp += matrix[i][left] + " ";
      count++;
    }
    left++;
    if (count >= size * size) break;
    for (let i = left; i <= right; i++) {
      temp += matrix[bottom][i] + " ";
      count++;
    }
    bottom--;
    if (count >= size * size) break;
  }

  return temp;
}
