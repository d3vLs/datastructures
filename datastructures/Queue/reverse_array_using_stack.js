let data = [];
let str = "D3VLS";
str = str.split("");
let currentSize = data.length;

function push(val) {
  data[currentSize] = val;
  currentSize += 1;
  console.log(currentSize);
}

function pop() {
  let lastRemovedItem = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemovedItem;
}

function reverseStr(str) {
  for (let i = 0; i < str.length; i++) {
    push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    str[i] = pop();
  }
}

console.log(data);
reverseStr(str);
console.log(data);
console.log(str.join(""));
