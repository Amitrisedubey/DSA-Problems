/*
Given a string S of size N having all lowercase characters. count all the substrings of S such that
in each substring no character occurs more than twice.
output = 14
*/
let str = "aabba";
console.log(twoSubarrays(str));
function twoSubarrays(str) {
  //Write code here
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let freq = {};
    for (let j = i; j < str.length; j++) {
      let char = str[j];

      if (freq[char] == undefined) {
        freq[char] = 1;
      } else {
        freq[char] += 1;
      }
      console.log(freq);
      let valid = true;
      for (let key in freq) {
        if (freq[key] > 2) {
          valid = false;
          break;
        }
      }
      if (valid) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}

/*
  for (let i = 0; i < str.length; i++) {
    const freq = {};
    for (let j = i; j < str.length; j++) {
      const char = str[j];
      freq[char] = (freq[char] || 0) + 1;
      console.log(freq);
      valid = true;
      for (let key in freq) {
        if (freq[key] > 2) {
          valid = false;
          break;
        }
      }
      if (valid) {
        count++;
      } else {
        break;
      }
    }
  }
*/
