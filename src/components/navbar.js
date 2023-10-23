import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          E-commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/addProduct">
                Add a Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">
                Help
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">
                <i className="fas fa-cart-plus"></i>
                <span className="badge badge-danger ml-1">
                  {lengthItems?.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
