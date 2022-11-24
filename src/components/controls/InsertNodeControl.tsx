import { useState } from 'react';
import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';

export default function InsertNodeControl() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState('');

  return (
    <Stack>
      <Button>Insert</Button>
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