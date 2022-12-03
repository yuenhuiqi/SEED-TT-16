import './App.css';
import NewTransaction from './components/NewTransaction';
import AccountTransaction from './components/AccountTransaction';

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <NewTransaction />
      <AccountTransaction />
    </div>
  );
}

export default App;
