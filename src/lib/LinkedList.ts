class LinkedListNode {
  value: number;
  next: LinkedListNode|null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: LinkedListNode|null;
  length: number;

  constructor(value: number) {
    const node = new LinkedListNode(value);
    this.head = node;
    this.length = 1;
  }

  get nodes() {
    const nodes = [];
    let lastNode = this.head;
    while (lastNode !== null) {
      nodes.push(lastNode.value);
      lastNode = lastNode.next;
    }
    return nodes;
  }

  setNode(index: number, data: number) {
    if (index > this.length - 1) {
      return alert(`Node with ${index} does not exists`);
    }

    if (this.head === null) return;

    // Find node with given index
    let lastNode = this.head;
    let currentIndex = 0;
    while (lastNode.next !== null && currentIndex !== index) {
      lastNode = lastNode.next;
      currentIndex++;
    }
    lastNode.value = data;
  }

  insertNode(index: number, data: number) {
    if (index > this.length - 1) {
      return alert(`Node with ${index} does not exists`);
    }

    if (this.head === null) return;

    // Create new node and increase linked list length
    const newNode = new LinkedListNode(data);
    this.length++;

    if (index === 0) {
      // Set new node as head
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // Find node with given index
      let lastNode = this.head;
      let currentIndex = 0;
      while (lastNode.next !== null && currentIndex !== index - 1) {
        lastNode = lastNode.next;
        currentIndex++;
      }
      // Set new node and set it's next pointer to the next following index 
      newNode.next = lastNode.next;
      lastNode.next = newNode;
    }
  }

  addNode(data: number) {
    const newNode = new LinkedListNode(data);
    this.length++;

    // If linked list is empty set new node as head
    if (this.head === null) {
      return this.head = newNode;
    }

    // Get last node and set it's next property to new node
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  removeNode(index: number) {
    if (index > this.length - 1) {
      return alert(`Node with ${index} does not exists`);
    }

    if (this.head === null) return;
    this.length--;

    // Update last node next pointer
    if (index === 0) {
      this.head = this.head.next;
    } else {
      // Find node with given index
      let lastNode = this.head;
      let currentIndex = 0;
      while (lastNode.next !== null && currentIndex !== index - 1) {
        lastNode = lastNode.next;
        currentIndex++;
      }
      if (lastNode.next === null) {
        lastNode.next = null;
      } else {
        lastNode.next = lastNode.next.next; 
      }
    }
  }
}