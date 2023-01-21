import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Navbar.css";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const menuItems = (
    <>
      <li>
        <NavLink className="text-xl mr-2 rounded-md font-semibold text-white" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl mr-2 rounded-md font-semibold text-white" to="/blog">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl mr-2 rounded-md font-semibold text-white" to="/product">
          Collection
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl mr-2 rounded-md font-semibold text-white" to="/myProducts">
          My Items
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl mr-2 rounded-md font-semibold text-white" to="/review">
          Reviews
        </NavLink>
      </li>
      {user ? (
        <button className="btn btn-accent text-white" onClick={() => signOut(auth)}>
          Log Out
        </button>
      ) : (
        <li>
          <NavLink className="text-xl mr-2 rounded-md text-white" to="/login">
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar px-20 font-mono bg-gradient-to-r from-[#156355] to-[#00C2B4]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 text-white p-2 shadow rounded-box w-52 font-mono bg-[#156355]"
            >
              {menuItems}
            </ul>
          </div>
          <h1 className="text-4xl font-bold text-white"> Fisino.</h1>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal font-mono">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
