/* 
Given a matrix of rows R rows and C columns which contain 
distinct integers and you are given a integer K and you
need to print both the diagonals crossing through the
given element K.you can always assume at the given 
elements always exist in the matrix.
Matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
    [12,14,15,16]
]
in that 4*4 matrix,suppose we need to print the diagonals passing
from 11 , so the output will be
1,6,11,16
8,11,14

Note:- you need to print the diagonal from top to bottom also make 
sure you print the diagonal going from left to right first then
diagonal going right to left , on a new line.

*/
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [12, 14, 15, 16],
];
let R = 4;
let C = 4;
let K = 11;
function specificDiagonals(R, C, Matrix, K) {
  //Write code here
  let Row;
  let Col;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (Matrix[i][j] === K) {
        Row = i;
        Col = j;
      }
    }
  }
  // Diagonal from top-left to bottom-right
  let diff = Row - Col;
  let diagonal1 = "";
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (i - j === diff) {
        diagonal1 += matrix[i][j] + " ";
      }
    }
  }
  // Diagonal from top-right to bottom-left
  let sum = Row + Col;
  let diagonal2 = "";
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (i + j === sum) {
        diagonal2 += matrix[i][j] + " ";
      }
    }
  }
  console.log(diagonal1);
  console.log(diagonal2);
}
specificDiagonals(R, C, matrix, K);
