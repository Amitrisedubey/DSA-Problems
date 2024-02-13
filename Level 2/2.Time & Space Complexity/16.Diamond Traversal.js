/*
You are given a Matrix diaomond traverse 
size = N*N
output = 6 2 4 8
output = 7 6 5 4 3 2 1 2 3 4 5 6 
*/
let Matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let size = 3;
console.log(diaomondTraverse(Matrix, size));
let Matrix2 = [
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
];
let size2 = 7;
console.log(diaomondTraverse(Matrix2, size2));
function diaomondTraverse(Matrix, size) {
  //Write code here
  // 1.
  let temp = "";
  let i = Math.floor(size / 2),
    j = size - 1;
  while (i >= 0 && j >= Math.floor(size / 2)) {
    temp += Matrix[i][j] + " ";
    i--;
    j--;
  }
  //2
  i += 2;
  while (i <= Math.floor(size / 2) && j >= 0) {
    temp += Matrix[i][j] + " ";
    i++;
    j--;
  }
  j += 2;
  while (i < size && j <= Math.floor(size / 2)) {
    temp += Matrix[i][j] + " ";
    i++;
    j++;
  }
  i -= 2;
  while (i >= Math.ceil(size / 2) && j < size - 1) {
    temp += Matrix[i][j] + " ";
    i--;
    j++;
  }

  return temp;
}
