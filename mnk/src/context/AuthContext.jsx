// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import users from '../data/users.json';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const matchedUser = users.find(
      u => u.username === username && u.password === password
    );
    if (matchedUser) {
      setUser(matchedUser);
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
