class Queue {
  constructor() {
    this.queue = [];
    this.currentSize = this.queue.length;
  }
  enqueue(val) {
    this.queue[this.currentSize] = val;
    this.currentSize += 1;
  }
  dequeue() {
    for (let i = 0; i < this.queue.length; i++) {
      this.queue[i] = this.queue[i + 1];
    }
    this.currentSize--;
    this.queue.length = this.currentSize;
  }
}

const myQueue = new Queue();
