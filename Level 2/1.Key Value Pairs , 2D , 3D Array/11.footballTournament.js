/*
DAV School had hosted a Football tournament. you got hold of a profound 
description of the final match's process. On the whole , there are n lines in that 
description each of which described one goal. Every goal was marked with the name of the team 
that had scored it. Write a program to find the name of the team that won the finals.it
is guaranteed that the match did not end in a tie.
output = A
*/
let arr = ["A", "ABA", "ABA", "A", "A"];
let n = 5;
console.log(footballTournament(arr, n));
function footballTournament(arr, n) {
  //Write code here
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
  }
  let max = -Infinity;
  let elem = "";
  for (key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      elem = key;
    }
  }
  return elem;
}
