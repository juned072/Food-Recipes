import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div>
        <Link to={"/"}>
          <h1 className="text-3xl font-bold text-slate-800">Food Recipes</h1>
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          <button
            className={`${
              location.pathname === "/"
                ? "bg-red-500 text-white"
                : "bg-white hover:bg-red-500 hover:text-white"
            } p-2 mx-2 rounded-md border`}
          >
            Home
          </button>
        </Link>
        <Link to={"/wishlist"}>
          <button
            className={`${
              location.pathname === "/wishlist"
                ? "bg-red-500 text-white"
                : "bg-white hover:bg-red-500 hover:text-white"
            } p-2 mx-2 rounded-md border`}
          >
            Wishlist
          </button>
        </Link>
        <Link to={"/cart"}>
          <button
            className={`${
              location.pathname === "/cart"
                ? "bg-red-500 text-white"
                : "bg-white hover:bg-red-500 hover:text-white"
            } p-2 mx-2 rounded-md border`}
          >
            Cart
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
