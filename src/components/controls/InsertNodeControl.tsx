import { useState } from 'react';
import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';
import { useLinkedList } from '../../context/LinkedListContext';

export default function InsertNodeControl() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState('');
  const { LinkedList, setNodes } = useLinkedList();

  const handleInsertNode = () => {
    LinkedList.insertNode(index, parseInt(data));
    setNodes(LinkedList.nodes);
  }

  return (
    <Stack>
      <Button onClick={handleInsertNode}>Insert</Button>
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