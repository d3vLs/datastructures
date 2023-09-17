const arr = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

const binarySearch = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    //calulating middle index of the array
    let mid = (max + min) / 2;
    mid = parseInt(mid);
    console.log(mid);
    if (arr[mid] == value)
      return mid; // if value at arr[mid] is equal to our value then return the mid
    else if (arr[mid] < value) min = mid + 1;
    // if value at arr[mid] is less then our value then assign min to mid + 1 divind our array in half
    else max = mid - 1; // if value at arr[mid] is more then our value then assign min to mid - 1 divind our array in half
  }
};

const index = binarySearch(arr, 128);

if (index) console.log(`Value is at index ${index}`);
else console.log("value not found");
