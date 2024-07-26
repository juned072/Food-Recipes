import React, { useContext } from "react";
import { ContextApi } from "../context/ContextApi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import CartEmptyVideo from "../assets/cart-empty.mp4";

const Cart = () => {
  const { cart } = useContext(ContextApi);

  return (
    <div className="md:max-w-screen-lg md:min-h-[80vh] md:mx-auto my-5 md:shadow-md md:rounded-md p-2">
      <div className="bg-red-500 hover:bg-red-600 w-8 h-8 flex items-center justify-center rounded-full">
        <Link to={"/"}>
          <IoMdArrowRoundBack className="cursor-pointer text-white text-xl" />
        </Link>
      </div>
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-80">
          <video
            src={CartEmptyVideo}
            autoPlay
            loop
            muted
            className="w-60 h-60"
          />
          <p className="text-gray-700 font-semibold text-sm">
            Your Cart is empty!
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {cart.map((item) => (
            <div>
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
