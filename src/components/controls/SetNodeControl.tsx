import { useRef } from 'react';
import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';
import { useLinkedList } from '../../context/LinkedListContext';

export default function SetNode() {
  const indexInputRef = useRef<HTMLInputElement|null>(null);
  const dataInputRef = useRef<HTMLInputElement|null>(null);
  const { LinkedList, setNodes } = useLinkedList();

  const handleSetNode = () => {
    if (dataInputRef.current === null || indexInputRef.current === null) return;
    const data = dataInputRef.current.value;
    const index = indexInputRef.current.value
    if (data.trim().length > 0 && index.trim().length > 0) {
      LinkedList.setNode(parseInt(index), parseInt(data));
      setNodes(LinkedList.nodes);
    }
  }

  return (
    <Stack>
      <Button onClick={handleSetNode}>Set</Button>
      <input 
        type="number" 
        placeholder="Index"
        ref={indexInputRef}
        min={0}
        defaultValue={0}
      />
      <input 
        type="text" 
        placeholder="Data"
        ref={dataInputRef}
      />
    </Stack>
  )
}