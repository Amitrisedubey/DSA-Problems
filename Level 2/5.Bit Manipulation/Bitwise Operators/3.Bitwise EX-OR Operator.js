/*
Bitwise Ex-OR Operator
A  B  A^B
0  0   0
0  1   1
1  0   1
1  1   0
If the both values are same output will be zero
otherwise 1
*/
//1
console.log(12 ^ 12); // output = 0
/*
what will happen in backend 
12 =>1 1 0 0
12 =>1 1 0 0
after using exor operator = > 0 0 0 0 => 0
*/
//2
console.log(12 ^ 0); // output  = 12
/*
what will happen in backend 
12 =>1 1 0 0
12 =>0 0 0 0
after using exor operator = > 1 1 0 0 => 12
*/
