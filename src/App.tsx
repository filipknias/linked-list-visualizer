import Appbar from './components/app/Appbar/Appbar';
import SetNodeControl from './components/controls/SetNodeControl';

export default function App() {
  return (
    <div className="container">
      <Appbar />
      <div className="main-view">
        <h1>Linked list node</h1>
        <div className="controls-container">
          <SetNodeControl />
        </div>
      </div>
    </div>
  )
}
