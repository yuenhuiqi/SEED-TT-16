import React, { useState } from 'react';
import { useUserContext } from '../context/userContext';

const Login = () => {
  const { user, signInEmailAndPassword } = useUserContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();

    if (!password) {
      alert('Please fill in your login details');
      return;
    }

    signInEmailAndPassword(email, password)
  };

  return (
    <form>
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Insert Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          placeholder="Insert Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={onLogin}>Login</button>
    </form>
  );
};

export default Login;
