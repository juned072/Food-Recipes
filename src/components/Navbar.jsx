import React from "react";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Food Recipes</h1>
      </div>
      <div>
        <button className="p-2 mx-2 rounded-md bg-white hover:bg-red-500 border hover:text-white">
          Home
        </button>
        <button className="p-2 mx-2 rounded-md bg-white hover:bg-red-500 border hover:text-white">
          Cart
        </button>
        <button className="p-2 mx-2 rounded-md bg-white hover:bg-red-500 border hover:text-white">
          Wishlist
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
