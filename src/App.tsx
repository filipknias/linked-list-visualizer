import Appbar from './components/app/Appbar/Appbar';
import SetNodeControl from './components/controls/SetNodeControl';
import InsertNodeControl from './components/controls/InsertNodeControl';
import AddNodeControl from './components/controls/AddNodeControl';
import NodesList from './components/app/NodesList/NodesList';
import { LinkedListProvider } from './context/LinkedListContext';

export default function App() {
  return (
    <LinkedListProvider>
      <div className="container">
        <Appbar />
        <div className="main-view">
          <NodesList />
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
