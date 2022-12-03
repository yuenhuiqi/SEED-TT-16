import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import './utils/firebase';
import { UserContextProvider } from './context/userContext';

function App() {
  return (
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
