import { useState } from 'react';
import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';
import { useLinkedList } from '../../context/LinkedListContext';

export default function AddNodeControl() {
  const [data, setData] = useState('');
  const { addNode } = useLinkedList();

  const handleAddNode = () => {
    if (data === "") return;
    addNode(data);
  }

  return (
    <Stack>
      <Button onClick={handleAddNode}>Add</Button>
      <input 
        type="text" 
        placeholder="Data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </Stack>
  )
}