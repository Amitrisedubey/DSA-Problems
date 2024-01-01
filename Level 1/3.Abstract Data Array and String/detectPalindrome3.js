let num = 1221;
detectPalindrome(num);
function detectPalindrome(num) {
  console.log(num);
  let reverse = 0;
  let temp = num;
  while (num !== 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(1221);
  }
  if (temp == reverse) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
