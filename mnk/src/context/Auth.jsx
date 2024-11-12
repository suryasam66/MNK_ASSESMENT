// src/components/Auth.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
  const { login, logout, user } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  };

  return user ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <div>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
