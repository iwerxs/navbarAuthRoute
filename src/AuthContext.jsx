// src/AuthContext.js

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mock login function to simulate authentication
  const login = (email, password) => {
    // Simulate a database lookup and role determination
    const mockDatabase = [
      { email: "admin@example.com", password: "admin", role: "admin" },
      { email: "platform@example.com", password: "platform", role: "platform" },
      { email: "company@example.com", password: "company", role: "company" },
      { email: "standard@example.com", password: "standard", role: "standard" },
    ];

    const foundUser = mockDatabase.find((user) => user.email === email);

    if (foundUser) {
      setUser(foundUser);
      return true;
    }

    return false;
  };

  // Mock logout function
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
