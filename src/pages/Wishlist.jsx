import React, { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ContextApi } from "../context/ContextApi";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useContext(ContextApi);
  return (
    <div className="max-w-screen-lg min-h-[80vh] mx-auto my-5 shadow-md rounded-md p-2 ">
      <div className="bg-red-500 hover:bg-red-600 w-8 h-8 flex items-center justify-center rounded-full">
        <Link to={"/"}>
          <IoMdArrowRoundBack className="cursor-pointer text-white text-xl" />
        </Link>
      </div>
      <div>
        <h3 className="text-center text-2xl font-bold"> Wishlist</h3>
      </div>
      <div className="max-w-screen-md m-auto flex flex-wrap items-center md:justify-between justify-center gap-5 mt-8">
        {wishlist.map((item) => {
          return (
            <div className="shadow-md rounded-md overflow-hidden w-80 relative">
              <div className="flex space-x-5 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-32 object-cover"
                />
                <div className="relative">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="font-semibold text-red-500">${item.price}</p>
                  <button className="absolute bottom-0  p-2 w-40 bg-red-500 hover:bg-red-600 rounded-t-md text-white">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="text-xl text-white bg-gray-400 rounded-full cursor-pointer absolute top-1 left-1">
                <IoClose title="Remove from wishlist" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
