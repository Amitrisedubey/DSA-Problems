/*
Bitwise OR Operator
A  B  A|B
0  0   0
0  1   1
1  0   1
1  1   1

if all values are 0 then output is 0
otherwise output is 1
*/

console.log(12 | 10); // Output will be 14

/*
What will happen in Backend?
we are using Bitwise or operator 
its means number will change into binary and bitwise operator will compare
12 => 1 1 0 0
14 => 1 1 1 0
after comparison we will get
1 1 1 0 => 14
 */
