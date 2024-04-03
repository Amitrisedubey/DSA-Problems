// How to check if a given number is a Power of 2 ?

function isPowerofTwo(n) {
  // Write code here
  if (n <= 0) {
    return false;
  }
  while (n % 2 == 0) {
    n = n / 2;
  }
  if (n == 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isPowerofTwo(32));

// Time Comlexity  = logn
