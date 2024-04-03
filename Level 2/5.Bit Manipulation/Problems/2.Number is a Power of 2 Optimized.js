// How to check if a given number is a Power of 2 ?

function isPowerofTwo(n) {
  // Write code here
  return n > 0 && (n & (n - 1)) == 0;
}
console.log(isPowerofTwo(32));

// Time Comlexity  = O(1)
/*
function isPowerofTwo(n) {
  // Write code here
  if (n != 0 && (n & (n - 1)) == 0) {
    return true;
  } else {
    return false;
  }
}
*/
