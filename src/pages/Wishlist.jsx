import React, { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ContextApi } from "../context/ContextApi";
import { Link } from "react-router-dom";
import EmptyWishlist from "../assets/wishlist-empty.mp4";

const Wishlist = () => {
  const { wishlist, wishlistToCart, removeItemWishlist } =
    useContext(ContextApi);
  return (
    <div className="md:max-w-screen-lg md:min-h-[80vh] md:mx-auto my-5 md:shadow-md md:rounded-md p-2 ">
      <div className="bg-red-500 hover:bg-red-600 w-8 h-8 flex items-center justify-center rounded-full">
        <Link to={"/"}>
          <IoMdArrowRoundBack className="cursor-pointer text-white text-xl" />
        </Link>
      </div>
      <div>
        <h3 className="text-center text-2xl font-bold"> Wishlist</h3>
      </div>
      {wishlist.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-80">
          <video
            src={EmptyWishlist}
            autoPlay
            loop
            muted
            className="w-60 h-60"
          />
          <p>Your wishlist is empty</p>
        </div>
      ) : (
        <div className="max-w-screen-md m-auto flex flex-wrap items-center md:justify-between justify-center gap-5 mt-8">
          {wishlist.map((item) => {
            return (
              <div className="shadow-md rounded-md overflow-hidden w-80 relative">
                <div className="flex space-x-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-40 h-32 object-cover"
                  />
                  <div className="relative">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="font-semibold text-red-500">${item.price}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold">Stock</p>
                      <p className="text-gray-500">In Stock</p>
                    </div>
                    <button
                      onClick={() => wishlistToCart(item)}
                      className="absolute bottom-0  p-2 w-40 bg-red-500 hover:bg-red-600 rounded-t-md text-white"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <div
                  onClick={() => removeItemWishlist(item)}
                  className="text-xl text-white bg-gray-400 hover:bg-gray-500 rounded-full cursor-pointer absolute top-1 left-1"
                >
                  <IoClose title="Remove from wishlist" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
