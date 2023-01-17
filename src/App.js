import './App.css';
import DragnDrop from './DragnDrop';
import Resize from './Resize';

function App() {

  return (
    <div className="App">
      <div className="container">
        <div><DragnDrop/></div>
        <div className="row resizer"><Resize/></div>
      </div>
    </div>
  );
}

export default App;
