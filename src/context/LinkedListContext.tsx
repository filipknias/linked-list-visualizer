import { createContext, useContext, ReactNode, useState } from "react";

interface LinekdListContext {
  setNode: (index: number, data: string) => void;
  insertNode: (index: number, data: string) => void;
  addNode: (data: string) => void;
  getNodes: () => string[];
}

const initialValue = {
  setNode: (index: number, data: string) => {},
  insertNode: (index: number, data: string) => {},
  addNode: (data: string) => {},
  getNodes: () => [],
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
  head: LinkedListNode;
  length: number; 

  constructor(value: number) {
    const node = new LinkedListNode(value);
    this.head = node;
    this.length = 1;
  }
}

export const LinkedListProvider = ({ children }: { children: ReactNode }) => {
  const [linkedList, setLinkedList] = useState<LinkedList>(new LinkedList(1));

  const setNode = (index: number, data: string) => {

  }

  const insertNode = (index: number, data: string) => {

  }

  const addNode = (data: string) => {
    console.log(data);
  }

  const getNodes = () => {
    return [linkedList.head.value.toString()];
  }

  const value = {
    setNode,
    insertNode,
    addNode,
    getNodes,
  }

  return (
    <LinekdListContext.Provider value={value}>
      {children}
    </LinekdListContext.Provider>
  )
}