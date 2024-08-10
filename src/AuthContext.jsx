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
      {
        email: "admin@example.com",
        password: "admin",
        role: "admin",
        name: "AdmiN",
      },
      {
        email: "platform@example.com",
        password: "platform",
        role: "platform",
        name: "PlatforM",
      },
      {
        email: "company@example.com",
        password: "company",
        role: "company",
        name: "CompanY",
      },
      {
        email: "standard@example.com",
        password: "standard",
        role: "standard",
        name: "StandarD",
      },
    ];

    const foundUser = mockDatabase.find(
      (u) => u.email === email && u.password === password
    );

    // const foundUser = mockDatabase.find((user) => user.email === email);

    if (foundUser) {
      console.log("user found", foundUser);
      setUser({
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
      });
      return true;
    }
    console.log("user not found");
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
