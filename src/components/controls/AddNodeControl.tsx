import { useRef } from 'react';
import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';
import { useLinkedList } from '../../context/LinkedListContext';

export default function AddNodeControl() {
  const dataInputRef = useRef<HTMLInputElement|null>(null);
  const { LinkedList, setNodes } = useLinkedList();

  const handleAddNode = () => {
    if (dataInputRef.current === null) return;
    const data = dataInputRef.current.value;
    if (data.trim().length > 0) {
      LinkedList.addNode(parseInt(data));
      setNodes(LinkedList.nodes);
    }
  }

  return (
    <Stack>
      <Button onClick={handleAddNode}>Add</Button>
      <input 
        type="number" 
        placeholder="Data"
        ref={dataInputRef}
      />
    </Stack>
  )
}