import { useRef } from 'react';
import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';
import { useLinkedList } from '../../context/LinkedListContext';

export default function InsertNodeControl() {
  const indexInputRef = useRef<HTMLInputElement|null>(null);
  const dataInputRef = useRef<HTMLInputElement|null>(null);
  const { LinkedList, setNodes } = useLinkedList();

  const handleInsertNode = () => {
    if (dataInputRef.current === null || indexInputRef.current === null) return;
    LinkedList.insertNode(parseInt(indexInputRef.current.value), parseInt(dataInputRef.current.value));
    setNodes(LinkedList.nodes);
  }

  return (
    <Stack>
      <Button onClick={handleInsertNode}>Insert</Button>
      <input 
        type="number" 
        placeholder="Index"
        ref={indexInputRef}
        min={0}
      />
      <input 
        type="text" 
        placeholder="Data"
        ref={dataInputRef}
      />
    </Stack>
  )
}