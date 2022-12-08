import { createContext, useContext, ReactNode, useState, useRef, useEffect } from "react";
import { LinkedList } from "../lib/LinkedList";

interface LinekdListContext {
  LinkedList: LinkedList,
  nodes: number[];
  setNodes: React.Dispatch<React.SetStateAction<number[]>>;
}

const initialValue = {
  LinkedList: new LinkedList(1),
  nodes: [],
  setNodes: () => {},
}

const LinekdListContext = createContext<LinekdListContext>(initialValue);
const initialNodeValue = 1;

export const useLinkedList = () => useContext(LinekdListContext);

export const LinkedListProvider = ({ children }: { children: ReactNode }) => {
  const LinkedListInstance = useRef<LinkedList|null>(null);
  const [nodes, setNodes] = useState<number[]>([]);

  useEffect(() => {
    if (!LinkedListInstance.current) {
      const newLinkedList = new LinkedList(initialNodeValue);
      LinkedListInstance.current = newLinkedList;
      if (newLinkedList.head !== null) {
        setNodes([newLinkedList.head.value]);
      }
    }
  }, []);

  const value = {
    nodes,
    setNodes,
    LinkedList: LinkedListInstance.current || new LinkedList(initialNodeValue),
  };

  return (
    <LinekdListContext.Provider value={value}>
      {children}
    </LinekdListContext.Provider>
  )
}