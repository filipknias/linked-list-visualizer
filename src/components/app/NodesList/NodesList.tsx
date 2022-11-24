import classes from "./NodesList.module.css";
import { useLinkedList } from '../../../context/LinkedListContext';
import Node from '../Node/Node';

export default function NodesList() {
  const { getNodes } = useLinkedList();

  return (
    <div className={classes['nodes-list']}>
      {getNodes().map((node, idx) => (
        <Node value={node} key={idx} />
      ))}
    </div>
  )
}