/*
John Nash , the famous American Mathematician, is currently working on sets. 
Apart form being a great Mathematician.
he is very particular about the order of numbers .Therefore, he wants everything in order .
He is going to be working on two sets,but he wants to merge them together , to use his time optimally.
Therefore , he asks his assistant to merge the two sets , and form a new set , 
and arrange it in ascending order of numbers . two sets are given in the forms of arrays . merge the
two sets , and sort them in ascending order of elements . Note that sets don not contain any duplicate
elements , so the new set formed should not have any duplicate elements .
Print the set formed by merging the two sets together in sorted format
output = 12345

*/
let set1 = [1, 2, 3, 4];
let set2 = [1, 5, 4, 4, 2];
console.log(joshNashAndSets(set1, set2));
let se1 = [3, 4, 1, 2];
let se2 = [1, 5, 4, 4, 2];
console.log(joshNashAndSets(se1, se2));
function joshNashAndSets(set1, set2) {
  //Write code here
  // Merge the sets and remove duplicates
  let mergedSet = mergeAndRemoveDuplicates(set1, set2);
  // Sort the merged set in ascending order
  bubbleSort(mergedSet);
  return mergedSet;
}
function mergeAndRemoveDuplicates(set1, set2) {
  let mergedSet = [];

  for (let num of set1) {
    if (!mergedSet.includes(num)) {
      mergedSet.push(num);
    }
  }

  for (let num of set2) {
    if (!mergedSet.includes(num)) {
      mergedSet.push(num);
    }
  }

  return mergedSet;
}

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
