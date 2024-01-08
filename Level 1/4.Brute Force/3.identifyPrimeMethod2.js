identifyPrime(1);
function identifyPrime(num) {
  if (num <= 1) {
    console.log("false");
    return;
  }
  let ans = true;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      ans = false;
      break;
    }
  }
  console.log(ans);
}
