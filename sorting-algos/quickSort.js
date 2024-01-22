const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];//start position of the sorting
  let leftArr = []; //left sub array
  let rightArr = [];//right sub array

  for (let i = 1; i < arr.length; i++) {
    //if current element is smaller than the pivot
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  //recursively calling the quick sort function to keep
  //dividing the array until it is sorted fully
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

arr = [6, 8, 10, 12, 15, 16, 18, 20, 22, 25]; // unsorted array
const result = quickSort(arr); // saving the sorted array in result
console.log(result); // logging the result



