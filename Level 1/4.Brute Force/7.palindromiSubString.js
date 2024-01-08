/*
You are provided a string S
Write a program that return length of the longest Palindromic substring
S = "thisracecarisgood"
Output = 7
*/
let str = "thisracecarisgood";
palindromicSubstring(str);

function palindromicSubstring(str) {
  let max = -Infinity;
  for (let i = 0; i < str.length; i++) {
    let substring = "";
    for (let j = i; j < str.length; j++) {
      substring += str[j];
      // console.log(substring);
      if (checkPalindrome(substring) && substring.length > max) {
        max = substring.length;
      }
    }
  }
  console.log(max);
}

function checkPalindrome(palindrome) {
  let rev = "";
  for (let i = palindrome.length - 1; i >= 0; i--) {
    rev += palindrome[i];
  }
  return palindrome == rev;
}
