import Appbar from './components/app/Appbar/Appbar';
import SetNodeControl from './components/controls/SetNodeControl';
import InsertNodeControl from './components/controls/InsertNodeControl';
import AddNodeControl from './components/controls/AddNodeControl';
import Node from './components/app/Node/Node';

export default function App() {
  return (
    <div className="container">
      <Appbar />
      <div className="main-view">
        <div style={{ display: 'flex', gap: '15px' }}>
          <Node value={"2"} />
          <Node value={"2"} />
        </div>
        <div className="controls-container">
          <SetNodeControl />
          <InsertNodeControl />
          <AddNodeControl />
        </div>
      </div>
    </div>
  )
}
