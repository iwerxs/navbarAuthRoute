// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import logoImage from "../assets/compLogo.jpg";
import "../App.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  const renderLinks = () => {
    if (!user) {
      return (
        <>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
        </>
      );
    }

    const links = {
      admin: [
        { name: "Numeration", to: "/numeration" },
        { name: "Create User", to: "/create-user" },
        { name: "Create Company", to: "/create-company" },
      ],
      platform: [
        { name: "Numeration", to: "/numeration" },
        { name: "Create User", to: "/create-user" },
        { name: "Create Company", to: "/create-company" },
      ],
      company: [
        { name: "Numeration", to: "/numeration" },
        { name: "Create User", to: "/create-user" },
      ],
      standard: [{ name: "Numeration", to: "/numeration" }],
    };

    return (
      <>
        {links[user.role].map((link) => (
          <Link key={link.name} to={`/${link.toLowerCase().replace(" ", "-")}`}>
            {link.name}
          </Link>
        ))}
        <button onClick={logout}>Logout</button>
      </>
    );
  };

  return (
    <nav>
      <div className='logo'>
        {/* Make logo clickable */}
        <Link to='/'>
          <img src={logoImage} alt='company logo' style={{ height: "50px" }} />
        </Link>
      </div>
      <div className='links'>
        {user ? <span>Welecome, {user.name}</span> : null}
        {renderLinks()}
      </div>
    </nav>
  );
};

export default Navbar;
