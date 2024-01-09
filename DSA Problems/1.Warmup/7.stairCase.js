/*
Print a staircase of size  using # symbols and spaces.
Note: The last line must have  spaces in it.
input = 6
output =
     #
    ##
   ###
  ####
 #####
######
*/
let n = 6;
stairCase(n);
function stairCase(n) {
  for (let i = 1; i <= n; i++) {
    let result = " ".repeat(n - i) + "#".repeat(i);
    console.log(result);
  }
}
