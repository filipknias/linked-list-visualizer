import { createContext, useContext, ReactNode, useState } from "react";

interface LinekdListContext {
  setNode: (index: number, data: number) => void;
  insertNode: (index: number, data: number) => void;
  addNode: (data: number) => void;
  removeNode: (index: number) => void;
  nodes: number[];
}

const initialValue = {
  setNode: () => {},
  insertNode: () => {},
  addNode: () => {},
  removeNode: () => {},
  nodes: [],
}

const LinekdListContext = createContext<LinekdListContext>(initialValue);

export const useLinkedList = () => useContext(LinekdListContext);

class LinkedListNode {
  value: number;
  next: LinkedListNode|null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode|null;
  length: number; 

  constructor(value: number) {
    const node = new LinkedListNode(value);
    this.head = node;
    this.length = 1;
  }
}

export const LinkedListProvider = ({ children }: { children: ReactNode }) => {
  const [linkedList, setLinkedList] = useState<LinkedList>(new LinkedList(1));
  const [nodes, setNodes] = useState<number[]>([1]);

  const setNode = (index: number, data: number) => {
    if (index > linkedList.length - 1) return alert('invalid index');

    if (linkedList.head === null) return;

    // Find node with given index
    let lastNode = linkedList.head;
    let currentIndex = 0;
    while (lastNode.next !== null && currentIndex !== index) {
      lastNode = lastNode.next;
      currentIndex++;
    }
    lastNode.value = data;

    // Update nodes array
    const newNodes = getNodes();
    setNodes(newNodes);
  }

  const insertNode = (index: number, data: number) => {
    if (linkedList.head === null) return;

    // Create new node and increase linked list length
    const newNode = new LinkedListNode(data);
    linkedList.length++;

    if (index === 0) {
      // Set new node as head
      newNode.next = linkedList.head;
      linkedList.head = newNode;
    } else {
      // Find node with given index
      let lastNode = linkedList.head;
      let currentIndex = 0;
      while (lastNode.next !== null && currentIndex !== index - 1) {
        lastNode = lastNode.next;
        currentIndex++;
      }
      // Set new node and set it's next pointer to the next following index 
      newNode.next = lastNode.next;
      lastNode.next = newNode;
    }

    // Update nodes array
    const newNodes = getNodes();
    setNodes(newNodes);
  }

  const addNode = (data: number) => {
    const newNode = new LinkedListNode(data);
    linkedList.length++;

    // If linked list is empty set new node as head
    if (linkedList.head === null) {
      return linkedList.head = newNode;
    }

    // Get last node and set it's next property to new node
    let lastNode = linkedList.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;

    // Update nodes state
    const newNodes = getNodes();
    setNodes(newNodes);
  }

  const getNodes = () => {
    let lastNode = linkedList.head;
    const newNodes = [];
    while (lastNode !== null) {
      newNodes.push(lastNode.value);
      lastNode = lastNode.next;
    }
    return newNodes;
  }

  const removeNode = (index: number) => {
    if (linkedList.head === null) return;
    linkedList.length--;

    // Update last node next pointer
    if (index === 0) {
      linkedList.head = linkedList.head.next;
    } else {
      // Find node with given index
      let lastNode = linkedList.head;
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

    // Update nodes state
    const newNodes = getNodes();
    setNodes(newNodes);
  }

  const value = {
    setNode,
    insertNode,
    addNode,
    removeNode,
    nodes,
  }

  return (
    <LinekdListContext.Provider value={value}>
      {children}
    </LinekdListContext.Provider>
  )
}