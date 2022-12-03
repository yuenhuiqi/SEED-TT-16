import React, { useState } from 'react';
import './App.css';
import NewTransaction from './components/NewTransaction';
import AccountTransaction from './components/AccountTransaction';
import Login from './components/Login';
import './utils/firebase';
import { UserContextProvider, useUserContext } from './context/userContext';

function App() {
  const [newTransaction, setNewTransaction] = useState(0);
  const [login, setLogin] = useState(1);

  return (
    <UserContextProvider>
      {!login ? 
        <Login setIsLogin={setLogin} /> :
        <div className="App">
          <h1>APP</h1>
          {!newTransaction ? 
            <button onClick={() => setNewTransaction(1)}>
              New transaction
            </button>:
            <NewTransaction />}
          <AccountTransaction />
        </div>
      }
      {/* {!login ?
        <Login setIsLogin={setLogin} /> :
        <h1>test</h1>
      } */}
    </UserContextProvider>
  );
}

export default App;
