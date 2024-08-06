//src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Numeration from "./components/Numeration";
import CreateUser from "./components/CreateUser";
import CreateCompany from "./components/CreateCompany";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='content'>
              <Routes>
                <Route path='/' element={<h1>Welcome to the Home Page</h1>} />
                <Route path='/login' element={<Login />} />
                {/* Add more routes as needed */}
                <Route
                  path='/numeration'
                  element={
                    <ProtectedRoute
                      allowedRoles={[
                        "admin",
                        "platform",
                        "company",
                        "standard",
                      ]}>
                      <Numeration />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/create-user'
                  element={
                    <ProtectedRoute
                      allowedRoles={["admin", "platform", "company"]}>
                      <CreateUser />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/create-company'
                  element={
                    <ProtectedRoute allowedRoles={["admin", "platform"]}>
                      <CreateCompany />
                    </ProtectedRoute>
                  }
                />
                {/* Add more protected routes as needed */}
              </Routes>
            </div>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
