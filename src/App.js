import logo from './logo.svg';
import './App.css';
import Myphoto from './Myphoto';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <h3>PEN Compliance Report</h3>
      {/* <h4>You failed to submit your activity data on daily basis</h4> */}

      </header>
      
      <div style={{maxHeight:"100vh"}}>
      <Myphoto/>
      </div>

    </div>
  );
}

export default App;
