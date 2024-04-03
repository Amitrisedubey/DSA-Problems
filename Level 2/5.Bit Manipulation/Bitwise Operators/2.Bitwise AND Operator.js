/*
Bitwise OR Operator
A  B  A&B
0  0   0
0  1   0
1  0   0
1  1   1

if the all values are 1 then output is 1
otherwise output is 0
*/

console.log(12 & 10); // Output will be 8

/*
What will happen in Backend?
we are using Bitwise or operator 
its means number will change into binary and bitwise operator will compare
12 => 1 1 0 0
14 => 1 1 1 0
after comparison we will get
1 0 0 0 => 8
 */
