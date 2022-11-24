import { useState } from 'react';
import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';
import { useLinkedList } from '../../context/LinkedListContext';

export default function AddNodeControl() {
  const [data, setData] = useState(0)
  const { addNode } = useLinkedList();

  return (
    <Stack>
      <Button onClick={() => addNode(data)}>Add</Button>
      <input 
        type="number" 
        placeholder="Data"
        value={data}
        onChange={(e) => setData(parseInt(e.target.value))}
      />
    </Stack>
  )
}