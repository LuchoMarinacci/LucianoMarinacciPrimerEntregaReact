import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}><img src="images/logobulkgym.png" alt="logobulkgym" width="150px" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" activeclassname="page" to={"/category/Productos"}>Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeclassname="page" to={"/Nosotros"}>Nosotros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeclassname="page" to={"/Tienda Online"}>Tienda Online</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeclassname="page" to={"/Contactos"}>Contactos</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;
