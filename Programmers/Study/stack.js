class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    return this.top;
  }

  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }

  pop() {
    if (this.size() <= 0) {
      return;
    }

    let result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;

    return result;
  }
}
