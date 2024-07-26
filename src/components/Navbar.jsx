import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { ContextApi } from "../context/ContextApi";
import pageIcon from "../assets/pageIcon.png";

const Navbar = () => {
  const { cart } = useContext(ContextApi);
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <Link to={"/"}>
        <div className="flex items-center justify-center space-x-2">
          <img src={pageIcon} alt="icon" className="w-10" />
          <h1 className="md:text-3xl text-2xl font-bold text-slate-800">
            Food <span className="text-red-500">Recipes</span>
          </h1>
        </div>
      </Link>
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
          <button className="mr-4 text-3xl ">
            <CiHeart />
          </button>
        </Link>
        <Link to={"/cart"} className="relative">
          <button className="text-3xl ">
            <CiShoppingCart />
          </button>
          {cart.length > 0 && (
            <div className="absolute bottom-5 left-5 ">
              <p className="bg-red-500 text-white text-[12px] rounded-full w-5 h-5 text-center">
                {cart.length}
              </p>
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
