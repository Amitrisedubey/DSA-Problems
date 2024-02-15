/*
The vaccine for corona virus is in short supply therefore the scienctists at 
the university of india came up with certaine numbers of chemical compounds 
which one combining can make alternative medicine for corona virus

But all these chemical compounds have different reactive power and for 
the vaccine to be effective two chemical compounds need to be mixed such that 
the sum of total reactivity of the two compound is equl to K

Two components are kept in strictly increasing order of the reactivity 
you have to find out if there are two components whose combine reactivity is 
equal to K 
print Possible if there are two components else Impossible
output = Possible
output = Impossible
*/
let size = 5;
let K = 7;
let arr = [1, 2, 3, 4, 5];
console.log(medicineOfLife(size, K, arr));
let size2 = 5;
let K2 = 12;
let arr2 = [1, 2, 3, 4, 5];
console.log(medicineOfLife(size2, K2, arr2));
function medicineOfLife(size, K, arr) {
  //Write code here
  let left = 0;
  let right = size - 1;
  let sum;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum == K) {
      return "Possible";
    } else if (sum < K) {
      left++;
    } else {
      right--;
    }
  }
  return "Not Possible";
}
