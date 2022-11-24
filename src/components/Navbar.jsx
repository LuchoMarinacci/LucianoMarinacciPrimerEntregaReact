import React from "react";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="images/logobulkgym.png" alt="logobulkgym" width="150px" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tienda Online</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contactos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;
