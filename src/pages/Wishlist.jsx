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
    <div className="md:max-w-screen-lg md:min-h-[80vh] md:mx-auto my-5 md:shadow-md md:rounded-md md:p-6 p-4">
      <div className="flex items-center justify-between mb-4">
        <Link to={"/"}>
          <div className="bg-red-600 hover:bg-red-700 transition-colors duration-300 w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
            <IoMdArrowRoundBack className="text-white text-xl" />
          </div>
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">Wishlist</h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-80">
          <video
            src={EmptyWishlist}
            autoPlay
            loop
            muted
            className="w-60 h-60 rounded-lg"
          />
          <p className="mt-4 text-gray-600 font-semibold">
            Your wishlist is empty
          </p>
        </div>
      ) : (
        <div className="max-w-screen-lg m-auto">
          <div className="flex flex-wrap gap-5 md:justify-between justify-center">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="shadow-md rounded-md overflow-hidden w-96 relative"
              >
                <div className="flex space-x-5 p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-40 h-40 object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-between flex-1 pr-5">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="font-semibold text-red-500">${item.price}</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="font-bold">Stock</p>
                      <p className="text-gray-500">In Stock</p>
                    </div>
                    <button
                      onClick={() => wishlistToCart(item)}
                      className="mt-4 p-2 bg-red-500 hover:bg-red-600 rounded-md text-white"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <div
                  onClick={() => removeItemWishlist(item)}
                  className="absolute top-2 right-2 text-xl text-white bg-gray-400 hover:bg-gray-500 rounded-full cursor-pointer p-1"
                >
                  <IoClose title="Remove from wishlist" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
