/*
Alice and Bob each created one problem for HackerRank. A reviewer
rates the two challenges, awarding points on a scale from 1 to 100
for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet
a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the
triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing
a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.
Sample Input 0

5 6 7
3 6 10
Sample Output 0

1 1
*/
let a = [5, 6, 7]; //Alice
let b = [3, 6, 10]; //Bob
console.log(compareTriplets(a, b));
function compareTriplets(a, b) {
  let alicePoint = 0;
  let bobPoint = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoint++;
    }
    if (b[i] > a[i]) {
      bobPoint++;
    }
  }
  return [alicePoint, bobPoint];
}
