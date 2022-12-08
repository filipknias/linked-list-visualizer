import { useState } from 'react';
import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';
import { useLinkedList } from '../../context/LinkedListContext';

export default function SetNode() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState('');
  const { LinkedList, setNodes } = useLinkedList();

  const handleSetNode = () => {
    LinkedList.setNode(index, parseInt(data));
    setNodes(LinkedList.nodes);
  }

  return (
    <Stack>
      <Button onClick={handleSetNode}>Set</Button>
      <input 
        type="number" 
        placeholder="Index"
        value={index}
        onChange={(e) => setIndex(parseInt(e.target.value))}
        min={0}
      />
      <input 
        type="text" 
        placeholder="Data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </Stack>
  )
}