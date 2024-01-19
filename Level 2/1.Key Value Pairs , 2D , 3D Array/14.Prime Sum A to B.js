/*
you are given two numbers , stored in a variable with the name A to B 
Find out the sum of all prime numbers in the range of [A to B].
including the value stored A and B 
output = 2+3+5 = 10
*/
let A = 1;
let B = 5;
console.log(primeSumAtoB(A, B));
function primeSumAtoB(A, B) {
  //Write code here
  let sum = 0;
  for (let i = A; i <= B; i++) {
    if (primeCheck(i)) {
      sum += i;
    }
  }
  function primeCheck(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return sum;
}
