// import { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  // const { logout, user } = useContext(AuthContext);
  const { logout, user } = useAuth();
  const handleLogout = () => {
    logout();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/myBooking">My Bookings</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className="btn btn-ghost text-xl" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button onClick={handleLogout} className="btn btn-info">
              Logout
            </button>
          ) : (
            <Link to="/signUp">
              <button className="btn btn-secondary">Sign up</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
