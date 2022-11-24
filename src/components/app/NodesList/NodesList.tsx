import classes from "./NodesList.module.css";
import { useLinkedList } from '../../../context/LinkedListContext';
import Node from '../Node/Node';

export default function NodesList() {
  const { nodes } = useLinkedList();

  return (
    <div className={classes['nodes-list']}>
      {nodes.map((node, idx) => (
        <Node value={node.toString()} key={idx} />
      ))}
    </div>
  )
}