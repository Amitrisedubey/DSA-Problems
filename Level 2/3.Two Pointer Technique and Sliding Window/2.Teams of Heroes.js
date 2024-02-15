/*
India and New Zeland are going to be playing
in the final of the world test championship, and Virat Kohli the captain of team indian cricket
team disperately wants to win the game 
Now virat kohli is supersitious. he has supersitious that if the sum of the jersey
of the captain and vice captain of the team is exactly equal to be the team win one hundred percent
Now he has N jersey number given in the form of an array and he has to find out . if there are two jersey
number whose sum is equal to k or not . the jersey number have been lept in strictly in increasing order.
help him accomplish the task
output = "Yes"
output ="No"
*/
let N = 5,
  K = 31;
let array = [10, 11, 13, 17, 21];
console.log(teamOfHeroes(array, N, K));
let N2 = 5,
  K2 = 44;
let array2 = [10, 11, 13, 17, 21];
console.log(teamOfHeroes(array2, N2, K2));
function teamOfHeroes(array, N, K) {
  //Write code here
  let left = 0;
  let right = N - 1;
  let sum;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum == K) {
      return "Yes";
    } else if (sum < K) {
      left++;
    } else {
      right--;
    }
  }
  return "No";
}
