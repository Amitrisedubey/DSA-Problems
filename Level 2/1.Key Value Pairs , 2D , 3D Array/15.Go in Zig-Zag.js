/*
Given a matrix  with N rows and M columns. 
Print the matrix starting from the top right corner and follow a zig-zag pattern.
required output is 
5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2
print all amtrix elements in a single line separated by spaces
*/
let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
  [3, 2, 5, 4, 6],
  [7, 8, 9, 1, 2],
];
let row = 4;
let col = 5;
console.log(goInZigZag(matrix, row, col));
function goInZigZag(matrix, row, col) {
  //Write code here
  let down = 0;
  let left = 0;
  let right = col - 1;
  let bag = "";
  for (let i = right; i >= left; i--) {
    bag += matrix[down][i] + " ";
  }
  down++;
  for (let i = left; i <= right; i++) {
    bag += matrix[down][i] + " ";
  }
  down++;
  for (let i = right; i >= left; i--) {
    bag += matrix[down][i] + " ";
  }
  down++;
  for (let i = left; i <= right; i++) {
    bag += matrix[down][i] + " ";
  }
  down++;
  return bag;
}
