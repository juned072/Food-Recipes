import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div>
        <Link to={"/"}>
          <h1 className="text-3xl font-bold text-slate-800">Food Recipes</h1>
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          <button className="p-2 mx-2 rounded-md bg-white hover:bg-red-500 border hover:text-white">
            Home
          </button>
        </Link>
        <Link to={"/wishlist"}>
          <button className="p-2 mx-2 rounded-md bg-white hover:bg-red-500 border hover:text-white">
            Wishlist
          </button>
        </Link>
        <Link to={"/cart"}>
          <button className="p-2 mx-2 rounded-md bg-white hover:bg-red-500 border hover:text-white">
            Cart
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
