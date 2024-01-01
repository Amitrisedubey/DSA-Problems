detectPalindrome("1221");
function detectPalindrome(num) {
  let rev = "";
  for (let i = num.length - 1; i >= 0; i--) {
    rev += num[i];
  }
  if (num == rev) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
