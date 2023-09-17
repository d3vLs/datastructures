//Linear search loops through each element one by one until it finds the needed element index
//
// time complexity : O(n)
//
// disadvantages : slow for large data sets
//
// advantages: fast for searches of small to medium data sets
//             does not need sortinf of data
//             Useful for data structures that do not have random access (linked list)

import process from "process";

const arr = [20, 90, 45, 24, 12, 87, 46, 76, 35];

function linearSearch(arr, value) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == value) return i; //keeps looping through the elements one by one until it finds our needed value and then return its index
  }
}
const value = parseInt(process.argv[2]); // taking the search element from command line argv and parsing it to int
const index = linearSearch(arr, value);

if (index != -1) console.log(`value is at index: ${index}`);
else console.log("value not found");
