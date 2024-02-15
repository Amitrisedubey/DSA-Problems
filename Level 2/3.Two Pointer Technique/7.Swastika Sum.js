/*
You are given a 2D array with n rows and m columns where n and m are always odd 
there are two different parts present in the 2D array and the sum of all elements of 
the first part is refered as sum1 and the other is refered as sum2.
you have to find the absolute differnce between sum1 and sum2

as seen sum1 is formed by all the elements starting from top-right => to middle column the bisect the figure 
vertically and they goes to the botttom left of the 2d array 
similarly sum2 is formed by all the elements in the top-left=> to middle tow then bisect the figure 
horizontally and the goes to the bottom right of 2d array
sum1 = 56
sum2 = 56
output = 0
*/
let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];
let n = 3;
let m = 5;
console.log(swastikaSum(matrix, n, m));
let matrix2 = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 7, 1, 9, 8],
  [2, 4, 1, 6, 11, 2, 7],
  [1, 9, 3, 4, 5, 2, 1],
];
let n2 = 5;
let m2 = 7;
console.log(swastikaSum(matrix2, n2, m2));
function swastikaSum(matrix, n, m) {
  // Write code here
  let sum1 = 0;
  let sum2 = 0;
  let i = 0;
  let j = m - 1;
  while (j >= Math.floor(m / 2)) {
    sum1 += matrix[i][j];
    j--;
  }
  i++;
  j++;
  while (i < n) {
    sum1 += matrix[i][j];
    i++;
  }
  i--;
  j--;
  while (j >= 0) {
    sum1 += matrix[i][j];
    j--;
  }
  i = 0;
  j = 0;
  while (i <= Math.floor(n / 2)) {
    sum2 += matrix[i][j];
    i++;
  }
  i--;
  j++;
  while (j < m) {
    sum2 += matrix[i][j];
    j++;
  }
  i++;
  j--;
  while (i < n) {
    sum2 += matrix[i][j];
    i++;
  }
  //console.log("i:=> " + i + " " + "j:=> " + j);
  let sum = Math.abs(sum1 - sum2);
  return sum;
}
