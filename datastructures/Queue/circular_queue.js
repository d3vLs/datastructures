class CircularQueue {
  constructor(size) {
    this.max = size;
    this.queue = new Array(size);
    this.currentSize = 0;
    this.rear = -1;
    this.front = -1;
  }
  enqueue(val) {
    if (this.currentSize != this.max) {
      if (this.rear == this.max - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.queue[this.rear] = val;
      this.currentSize++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }
}

const cirQueue = new CircularQueue(6);
