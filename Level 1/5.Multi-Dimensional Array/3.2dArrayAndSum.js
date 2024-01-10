/*
You are given an array matrix of n rows and m columns which 
contain positive integers and sum S
you need to find occurence of the sum of three consecutive numbers
equal to S appear horizontaly,vertically and diagonally  in the given matrix
output = 4
*/
let matrix = [
  [3, 3, 6],
  [3, 2, 1],
  [2, 2, 2],
  [1, 5, 1],
];
let row = 4;
let col = 3;
let S = 6;
console.log(TwoDArrayAndSum(matrix, row, col, S));
function TwoDArrayAndSum(matrix, row, col, S) {
  let count = 0;
  let sum;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      //Horizontaly
      if (j < col - 2) {
        sum = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2];
        if (sum == S) {
          count++;
        }
      }
      //Verticaly
      if (i < row - 2) {
        sum = matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j];
        if (sum == S) {
          count++;
        }
      }
      //Diagonal Downward
      if (i < row - 2 && j < col - 2) {
        sum = matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2];
        if (sum == S) {
          count++;
        }
      }
      //Diagonal Upward
      if (i > 1 && j < col - 2) {
        sum = matrix[i][j] + matrix[i - 1][j + 1] + matrix[i - 2][j + 2];
        if (sum == S) {
          count++;
        }
      }
    }
  }
  return count;
}
