import Appbar from './components/app/Appbar/Appbar';
import SetNodeControl from './components/controls/SetNodeControl';

export default function App() {
  return (
    <div className="container">
      <Appbar />
      <div style={{ width: '20%' }}>
        <SetNodeControl />
      </div>
    </div>
  )
}
