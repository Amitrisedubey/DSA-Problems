/*
You are given a matrix A of size NxM.
find the sum of all all the elements in the 
matrix which not lie at the border
Print a single integer denoting the sum of all the elements of the matrix.
output = 34
*/
let row = 4,
  col = 4;
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
sumWithoutBorders(row, col, matrix);
function sumWithoutBorders(row, col, matrix) {
  //Write code here
  let sum = 0;
  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      sum += matrix[i][j];
    }
  }
}
