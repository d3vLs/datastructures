class Stack {
  constructor() {
    this.data = new Array();
    this.currentSize = this.data.length;
    this.lastRemovedItem = "";
  }

  push(val) {
    this.data[this.currentSize] = val;
    this.currentSize += 1;
  }
  pop() {
    this.lastRemovedItem = this.data[this.currentSize - 1];
    this.currentSize -= 1;
    this.data.length = this.currentSize;
    return this.lastRemovedItem;
  }
  peak() {
    return this.data[this.currentSize - 1];
  }
  reverseStr(str) {
    for (let i = 0; i < str.length; i++) {
      this.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
      this.pop();
      str[i] = this.lastRemovedItem;
    }
    console.log(str.join(""));
  }
}

const myStack = new Stack();
myStack.push(2);
myStack.push(4);
myStack.push(25);
myStack.pop();
console.log(myStack.data);

class QueueUsingTwoStacks {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(data) {
    this.stack1.push(data);
  }

  dequeue() {
    if (this.stack1.data.length == 0 && this.stack2.data.length == 0) {
      return undefined;
    }

    if (this.stack2.data.length == 0) {
      while (this.stack1.data.length != 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

const queueStack = new QueueUsingTwoStacks();
