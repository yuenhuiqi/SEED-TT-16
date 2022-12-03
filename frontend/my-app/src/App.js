import React, { useState } from 'react';
import './App.css';
import NewTransaction from './components/NewTransaction';
import AccountTransaction from './components/AccountTransaction';


function App() {
  const [newTransaction, setNewTransaction] = useState(0);
  return (
    <div className="App">
      <h1>APP</h1>
      {!newTransaction ? 
        <button onClick={() => setNewTransaction(1)}>
          New transaction
        </button>:
        <NewTransaction />}
      <AccountTransaction />
    </div>
  );
}

export default App;
