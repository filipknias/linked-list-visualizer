import Stack from '../common/Stack/Stack';
import Button from '../common/Button/Button';

export default function RemoveNodeControl() {
  return (
    <Stack>
      <Button>Remove</Button>
      <input 
        type="number" 
        placeholder="Index"
        min={0}
      />
    </Stack>
  )
}