/*
You are given a square matrix if size NxN Rotate the matrix
by 180 degree.
output =[
  [12,11,10,9],
  [8,7,6,5],
  [4,3,2,1]]
*/
let N = 3;
let Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(rotateBy180(Matrix, N));
function rotateBy180(Matrix, N) {
  //Write code here
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      let temp = Matrix[i][j];
      Matrix[i][j] = Matrix[i][N - j];
      Matrix[i][N - j] = temp;
    }
  }
  for (let i = 0; i < N - 1; i++) {
    let temp = Matrix[i];
    Matrix[i] = Matrix[N - i - 1];
    Matrix[N - i] = temp;
  }
  return Matrix;
}
