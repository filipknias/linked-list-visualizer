import { useRef } from 'react';
import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';
import { useLinkedList } from '../../context/LinkedListContext';

export default function RemoveNodeControl() {
  const indexInputRef = useRef<HTMLInputElement|null>(null);
  const { removeNode } = useLinkedList();

  const handleRemoveNode = () => {
    if (indexInputRef.current === null) return;
    const indexValue = parseInt(indexInputRef.current.value);
    removeNode(indexValue);
  }

  return (
    <Stack>
      <Button onClick={handleRemoveNode}>Remove</Button>
      <input 
        type="number" 
        placeholder="Index"
        min={0}
        ref={indexInputRef}
      />
    </Stack>
  )
}