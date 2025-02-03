import React, { useState } from 'react';
import Web3 from 'web3';

const SmartContractInteraction = () => {
  const [contract, setContract] = useState(null);
  const [data, setData] = useState('');
  const [id, setId] = useState('');
  const [ipfsHash, setIpfsHash] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const loadContract = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const contractABI = [/* Your contract ABI here */];
      const contractAddress = '/* Your contract address here */';
      const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
      setContract(contractInstance);
    }
  };

  const addRecord = async () => {
    if (contract) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      await contract.methods.addRecord(id, ipfsHash).send({ from: accounts[0] });
    }
  };

  const getRecord = async () => {
    if (contract) {
      const record = await contract.methods.getRecord(id).call();
      setIpfsHash(record[0]);
      setTimestamp(record[1]);
    }
  };

  return (
    <div>
      <button onClick={loadContract}>Load Contract</button>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="IPFS Hash"
          value={ipfsHash}
          onChange={(e) => setIpfsHash(e.target.value)}
        />
        <button onClick={addRecord}>Add Record</button>
      </div>
      <div>
        <button onClick={getRecord}>Get Record</button>
        <p>IPFS Hash: {ipfsHash}</p>
        <p>Timestamp: {timestamp}</p>
      </div>
    </div>
  );
};

export default SmartContractInteraction;
