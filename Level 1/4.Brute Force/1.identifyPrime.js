identifyPrime(13);
function identifyPrime(num) {
  if (num <= 1) {
    console.log(false);
    return;
  }
  let ans = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      ans = false;
    }
  }
  console.log(ans);
}
