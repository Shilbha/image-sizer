import './App.css';
// import DragnDrop from './DragnDrop';
import Resize from './Resize';
import Intro from './Intro';


function App() {

  return (
    <div className="App">
      <div className="container">
        <div><Intro/></div>
        {/* <div><DragnDrop/></div> */}
        <div className="row resizer"><Resize/></div>
      </div>
    </div>
  );
}

export default App;
