import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Timer } from './components/Timer';


function App() {

  const [initialTime, setInitialTime] = useState(0);
  const [finalTime, setFinalTime] = useState(10);
  const [startTimer, setStartTimer] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className='input-container'>
          <label>Initial Time:
            <input type='number' onChange={(e) => setInitialTime(e.target.value)} placeholder="Initial time" value={initialTime} />
          </label>
        </div>
        <div className='input-container'>
          <label>Final Time:
            <input type='number' onChange={(e) => setFinalTime(e.target.value)} placeholder="Final time" value={finalTime} />
          </label>
        </div>

        {startTimer ? <Timer initialTime={+initialTime} finalTime={+finalTime} /> : <h3>Timer Stopped</h3>}

        <button onClick={() => setStartTimer(!startTimer)}>{startTimer ? 'Stop' : 'Start'}</button>
      </div>
    </div>
  );
}

export default App;
