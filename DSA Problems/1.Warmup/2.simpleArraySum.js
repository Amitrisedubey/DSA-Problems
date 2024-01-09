/*
Given an array of integers, find the sum of its elements.
For example, if the array ar =[1,2,3] ,1+2+3=6, so return 6.
Print the sum of the array's elements as a single integer.
Sample Input
6
1 2 3 4 10 11
Sample Output
31
*/
let size = 6;
arr = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(size, arr));
function simpleArraySum(size, ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += ar[i];
  }
  return sum;
}
