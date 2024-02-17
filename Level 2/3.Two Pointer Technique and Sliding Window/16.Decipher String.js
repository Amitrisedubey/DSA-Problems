/*
You are given a ciphered string , you have to decipher the string.
For example, if the string is "a2b1c2", then the deciphered string will be "aabcc"
the string contains only lowercase letters and numbers

*/
let str = "a2b1c2";
let n = 6;
console.log(decipher(str, n));
let str2 = "a2z1a2";
let n2 = 6;
console.log(decipher(str2, n2));
function decipher(str, n) {
  //Write code here
  let res = "";
  for (let i = 0; i < n; i++) {
    let char = str[i];
    let count = parseInt(str[i + 1]);
    res += char.repeat(count);
  }
  return res;
}
