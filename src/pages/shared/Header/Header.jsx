import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";



const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()

  const handleLogout = () => {
    logOut()
      .then((user) => {
        console.log("logout", user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order">Order</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li>
        <Link to='/dashboard/cart'>
        <button className="">
        <FaCartShopping />
          <div className="badge badge-secondary">+0</div>
        </button>
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed bg-base-100 z-10 bg-opacity-30 max-w-5xl mx-auto text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        ) : (
          <button className="btn">Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
