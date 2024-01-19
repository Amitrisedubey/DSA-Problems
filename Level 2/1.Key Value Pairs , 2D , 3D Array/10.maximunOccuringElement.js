/*
Given an array A of N yourtask is print that integers
which presents maximum numbers of times in the given array if 
there are two elements present the maximum number of times
print the one which come first in the array
output = 0
*/
let array = [0, 2, 0, 6, 9];
let N = 5;
console.log(maximumOccuringElement(array, N));
function maximumOccuringElement(array, N) {
  //Write code here
  let obj = {};
  for (let i = 0; i < N; i++) {
    if (obj[array[i]] == undefined) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]] = obj[array[i]] + 1;
    }
  }
  let max = -Infinity;
  let elem = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      elem = key;
    }
  }
  return elem;
}
