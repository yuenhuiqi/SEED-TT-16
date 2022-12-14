import React, { useState } from 'react';
import { useUserContext } from '../context/userContext';

const Login = ({ setIsLogin }) => {
  const { user, signInEmailAndPassword } = useUserContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();

    localStorage.setItem('AuthID', user.uid)

    if (!password) {
      alert('Please fill in your login details');
      return;
    }

    signInEmailAndPassword(email, password)
    if (user) {
      setIsLogin(1)
    }
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
          type="password"
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
