/*
Given a string S of all lowercase letters each other
letter has a value of its own 
The value of the alphabet a is 1 b is 2 cis 3 ....... till z is 26

Now you have to find the total value of the given string.
The total value of a string is the sum of value of all character present in string 
input = "aba"
output = 4
*/
let Str = "aba";
stringValue(Str);

function stringValue(str) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};
  for (let i = 1; i <= 26; i++) {
    obj[lower[i - 1]] = i;
  }
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += obj[str[i]];
  }
  console.log(sum);
}
