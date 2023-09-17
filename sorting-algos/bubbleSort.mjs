// It compares pairs of adjacent elements and the elements are swapped if the are
// not in order
//
//  time complexity : O(n^2)
//  small data set = okay-ish performance
//  large data set = Worse
//

const arr = [35, 20, 13, 78, 34, 76, 45, 97, 12];

function bubbleSort(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length - i - 1; j++) {
      // if current element is larger than the next element we swap both and continue
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const sortedArray = bubbleSort(arr);

console.log(sortedArray);
