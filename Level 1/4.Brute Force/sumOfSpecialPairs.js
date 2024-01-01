/*
You are given an array of N Integers
Write Program to find sum of the absolute difference
between all such pairs A[i] ,A[j], such that i<j and j-i is prime
output = 45
*/
let arr = [1, 2, 3, 5, 7, 12];
let size = 6;
sumOfSpecialPairs(arr, size);
function sumOfSpecialPairs(array, size) {
  let sum = 0;
  for (let i = 0; i < size - 1; i++) {
    for (let j = i + 1; j < size; j++) {
      if (primeCheck(j - i)) {
        sum += Math.abs(arr[i] - arr[j]);
      }
    }
  }
  console.log(sum);
}

function primeCheck(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
