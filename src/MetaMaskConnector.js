import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const MetaMaskConnector = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
          setAccount(accounts[0]);
        })
        .catch(error => {
          console.error("Error connecting to MetaMask:", error);
        });
    } else {
      console.error("MetaMask not detected.");
    }
  }, []);

  return (
    <div>
      <h1>Connected Account</h1>
      <p>{account}</p>
    </div>
  );
};

export default MetaMaskConnector;
