import { createContext, useContext, ReactNode, useState } from "react";

interface LinekdListContext {
  setNode: (index: number, data: number) => void;
  insertNode: (index: number, data: number) => void;
  addNode: (data: number) => void;
  nodes: number[];
}

const initialValue = {
  setNode: () => {},
  insertNode: () => {},
  addNode: () => {},
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

  }

  const insertNode = (index: number, data: number) => {
    if (linkedList.head === null) {
      // TODO: handle situation when head is null
      return;
    }

    // Create new node and increase linked list length
    const newNode = new LinkedListNode(data);
    linkedList.length++;

    if (index === 0) {
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
    setNodes((prevNodes) => [...prevNodes, newNode.value]);
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

  const value = {
    setNode,
    insertNode,
    addNode,
    nodes,
  }

  return (
    <LinekdListContext.Provider value={value}>
      {children}
    </LinekdListContext.Provider>
  )
}