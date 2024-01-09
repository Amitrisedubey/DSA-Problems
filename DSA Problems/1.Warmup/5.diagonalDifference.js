/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
Sample Input
3
11 2 4
4 5 6
10 8 -12
Sample Output
15
Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
Output = 15
*/
let n = 3;
let matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
console.log(diagonalDifference(matrix));
function diagonalDifference(matrix) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0, j = matrix.length - 1; i < matrix.length, j >= 0; i++, j--) {
    sum1 += matrix[i][i];
    sum2 += matrix[i][j];
  }
  let sum = Math.abs(sum1 - sum2);
  return sum;
}
