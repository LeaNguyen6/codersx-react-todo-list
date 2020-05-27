import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const todos=['Go to market','Buy food','Make dinner']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>{todos[0]}</li>
          <li>{todos[1]}</li>
          <li>{todos[2]}</li>
          </ul>
        
      </header>
    </div>
  );
}

export default App;
