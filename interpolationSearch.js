// const arr = [
//   1, 11, 1111, 11111111, 1111111111111111, 11111111111111111111111111111111,
//   1111111111111111111111111111111111111111111111111111111111111111,
//   11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111,
// ];

const arr = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

const interpolationSearch = (arr, value) => {
  let low = 0;
  let high = arr.length - 1;

  while (value >= arr[low] && value <= arr[high] && low <= high) {
    //calculating the probe or guessing the value index
    let probe =
      low + ((high - low) * (value - arr[low])) / (arr[high] - arr[low]);
    probe = parseInt(probe);

    // math.ceil makes the algo little faster by rounding up the probe to greater integer value.
    // probe = Math.ceil(probe);

    console.log(`Probe: ${probe}`);

    // if value at guessed probe is equal to our value then return the probe
    if (arr[probe] == value) {
      return probe;
    } else if (arr[probe] < value) {
      low = probe + 1; //if value at guessed probe is lower then then our value then move low to the position one more than guessed probe
    } else {
      high = probe - 1; //if value at guessed probe is lower then then our value then move high to the position one less than guessed probe
    }
  }
};

const index = interpolationSearch(arr, 256);

if (index) {
  console.log(`element is found at index: ${index}`);
} else {
  console.log("element is not found");
}
