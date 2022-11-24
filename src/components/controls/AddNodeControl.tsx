import { useState } from 'react';
import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';

export default function AddNodeControl() {
  const [data, setData] = useState('');

  return (
    <Stack>
      <Button>Add</Button>
      <input 
        type="text" 
        placeholder="Data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </Stack>
  )
}