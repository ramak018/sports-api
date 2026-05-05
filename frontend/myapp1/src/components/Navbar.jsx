import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
<nav className="navbar sticky-top bg-dark px-3">
  <span className="navbar-brand text-white fw-bold">
    Sports Hub
  </span>   

<Link to="/create" className="btn btn-success">
  Create
</Link>
</nav>
  );
};

export default Navbar;