import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { toast } from 'react-toastify';
import SearchInput from '../Form/SearchInput';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success('Logged Out Successfully!');
    setTimeout(() => {
      setAuth({
        ...auth,
        user: null,
        token: '',
      });
      localStorage.removeItem('auth');

      navigate('/login');
    }, 1000);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              🛒 E-Commerce App
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput/>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category">
                  Category
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? 'admin' : 'user'
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                          style={{ textDecoration: 'none' }}
                        >
                          LOGOUT
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
