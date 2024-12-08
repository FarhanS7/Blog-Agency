import { Link } from "react-router-dom";
import logo from "../assets/icon/logo.png";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="navbar-brand" href="#">
          <img className="nav-logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link ml-10 mr-10" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link ml-10" to="/about">
              About
            </Link>
            <Link className="nav-link ml-10" to="/service">
              Services
            </Link>
            <Link className="nav-link ml-10" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="container-fluid py-3 px-5 ">
          {!sessionStorage.getItem("token") && (
            <Link className="btn float-end " to="/login">
              Login
            </Link>
          )}

          {sessionStorage.getItem("token") && (
            <button onClick={logout} className="btn mx-2 btn-dark float-end">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
