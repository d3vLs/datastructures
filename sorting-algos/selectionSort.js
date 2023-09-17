// It searches through an array and keep track of min value during each iteration.
// At the end of each iteration we swap min value with current value.
// Selection Sort compares the value of min element with each element in the array and swaps the min value index with any other value
// smaller than min and after each iteration of the inner loop we swap the values of min and the current index value of outer loop
//
// time complexity O(n^2)
// good for small data sets
// very bad for large data sets

const arr = [35, 20, 13, 78, 34, 76, 45, 97, 12];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

const sortedArray = selectionSort(arr);

console.log(sortedArray);
