import React, { useContext } from "react";
import { ContextApi } from "../context/ContextApi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import CartEmptyVideo from "../assets/cart-empty.mp4";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { cart, removeItemCart, increaseItem, decreaseItem, totalItemPrice } =
    useContext(ContextApi);

  return (
    <div className="md:max-w-screen-lg md:min-h-[80vh] h-[88vh] md:mx-auto md:my-5 relative">
      <div className="p-4 md:p-6 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <div className="bg-red-600 hover:bg-red-700 transition-colors duration-300 w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
              <IoMdArrowRoundBack className="text-white text-xl" />
            </div>
          </Link>
          <h1 className="text-xl font-semibold text-gray-800 ">
            Shopping Cart
          </h1>
        </div>
        <div className="flex-grow mt-4 overflow-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col justify-center items-center">
              <video
                src={CartEmptyVideo}
                autoPlay
                loop
                muted
                className="w-72 h-72 rounded-lg"
              />
              <p className="mt-4 text-gray-600 font-semibold">
                Your Cart is empty!
              </p>
            </div>
          ) : (
            <div className="md:max-w-screen-md md:m-auto">
              <div className="overflow-auto">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg shadow-md mb-4 border border-gray-50"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-24 object-cover rounded-lg shadow-sm"
                    />
                    <div className="ml-4 flex-1">
                      <h2 className="text-lg font-medium text-gray-800">
                        {item.title}
                      </h2>
                      <p className="text-gray-500">{item.category}</p>
                      <p className="text-red-500 font-semibold mt-1">
                        $ {item.price}
                      </p>
                    </div>
                    <div className="flex-1 md:flex-row flex-col flex items-center md:space-x-4 ">
                      <button
                        onClick={() => decreaseItem(item.id)}
                        className="bg-red-500 w-8 h-8 flex items-center justify-center text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                      >
                        -
                      </button>
                      <p className="text-lg font-semibold">{item.qty}</p>
                      <button
                        onClick={() => increaseItem(item.id)}
                        className="bg-red-500 w-8 h-8 flex items-center justify-center text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                      >
                        +
                      </button>
                    </div>

                    <div>
                      <button
                        onClick={() => removeItemCart(item)}
                        title="Remove from cart"
                        className="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 rounded-md text-sm text-white p-2 mr-5"
                      >
                        <MdDeleteOutline />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="w-full bg-gray-900 text-white p-4 mt-4 rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between md:justify-normal items-center border-b border-gray-500">
            <h2 className="text-lg font-semibold md:mr-5 mr-0">Total Price:</h2>
            <p className="text-xl font-bold">${totalItemPrice()} </p>
          </div>
          <button className="flex justify-center items-center md:w-80 w-full bg-red-500 hover:bg-red-600 rounded-md p-2 mt-4">
            <CiShoppingCart className="mr-2 text-xl" /> Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
