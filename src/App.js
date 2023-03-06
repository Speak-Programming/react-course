import logo from './logo.svg';
import './App.css';

import { isPalindrom } from './functions/functions.ts';
import { useEffect } from 'react';


function App() {

  useEffect(()=>{
        console.log(isPalindrom('racecar'));
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Speak programming
        </a>
      </header>
    </div>
  );
}

export default App;
