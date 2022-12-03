import React, { useState } from 'react';
import './App.css';
import NewTransaction from './components/NewTransaction';
import AccountTransaction from './components/AccountTransaction';
import Login from './components/Login';
import './utils/firebase';
import { UserContextProvider } from './context/userContext';

function App() {
  const [newTransaction, setNewTransaction] = useState(0);
  return (
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );
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
