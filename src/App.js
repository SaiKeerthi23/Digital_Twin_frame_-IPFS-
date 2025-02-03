import logo from './logo.svg';
import './App.css';
import React from 'react';
import MetaMaskConnector from './MetaMaskConnector';
import SmartContractInteraction from './SmartContractInteraction';



function App() {
  return (   
    <div className="App">
      <header className="App-header">
      <h1>Welcome to My DApp</h1>
      <MetaMaskConnector />
      <SmartContractInteraction />
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
