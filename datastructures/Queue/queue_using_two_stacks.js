import Stack from "./stack_with_class";

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

queueStack.enqueue(1);
queueStack.enqueue(2);
queueStack.enqueue(3);
queueStack.enqueue(4);
