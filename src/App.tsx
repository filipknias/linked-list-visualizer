import Appbar from './components/app/Appbar/Appbar';
import SetNodeControl from './components/controls/SetNodeControl';
import InsertNodeControl from './components/controls/InsertNodeControl';
import AddNodeControl from './components/controls/AddNodeControl';
import Node from './components/app/Node/Node';
import { useLinkedList, LinkedListProvider } from './context/LinkedListContext';

export default function App() {
  const { getNodes } = useLinkedList();

  return (
    <LinkedListProvider>
      <div className="container">
        <Appbar />
        <div className="main-view">
          <div style={{ display: 'flex', gap: '15px' }}>
            {getNodes().map((node) => (
              <Node value={node} />
            ))}
          </div>
          <div className="controls-container">
            <SetNodeControl />
            <InsertNodeControl />
            <AddNodeControl />
          </div>
        </div>
      </div>
    </LinkedListProvider>
  )
}
