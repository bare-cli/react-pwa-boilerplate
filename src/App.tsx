import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://github.com/bare-cli/bare" target="_blank">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>
          Click Icon to go to bare-cli Github repo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
