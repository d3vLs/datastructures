// we compare the elements to the left with current value and shifts them to the right one bye one if
// current value is smaller than the elements on the left until we run out of elements on the left and
// then we place the value at very first index of the loop
//
// time complexity: O(n^2)
// decent for small data sets
// bad for large data sets

const arr = [35, 20, 13, 78, 34, 76, 45, 97, 12];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

const sortedArray = insertionSort(arr);

console.log(sortedArray);
