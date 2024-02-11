import './App.css';
import Router from './Router/Router';
import Number from './Context/Context';
import { useState } from 'react';

function App() {

  const [value, setvalue] = useState(0)

  return (
    <div className="App">
      <Number.Provider value={[ value, setvalue ]}>
        <Router />
      </Number.Provider>
    </div>
  );
}

export default App;
