import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="link">Home</Link>
      <Link to="/addBlog" className="link">AddBlog</Link>
      <Link to="/login" className="link">Login</Link>
      <Link to="/signup" className="link">signup</Link>
    </div>
  );
};

export default Navbar;
