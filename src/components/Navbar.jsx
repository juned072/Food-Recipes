import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div>
        <Link to={"/"}>
          <h1 className="md:text-3xl text-2xl font-bold text-slate-800">
            Food Recipes
          </h1>
        </Link>
      </div>
      <div className="md:block hidden">
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
      <div className="md:hidden block">
        <Link to={"/wishlist"}>
          <button className="mr-2 text-2xl">
            <CiHeart />
          </button>
        </Link>
        <Link to={"/cart"} className="relative">
          <button className="text-2xl mr-2 ">
            <CiShoppingCart />
          </button>
          <div className="absolute bottom-5 left-5 ">
            <p className="bg-red-500 text-white text-sm rounded-full w-5 h-5 text-center">
              0
            </p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
