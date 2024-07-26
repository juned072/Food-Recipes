import React, { useContext } from "react";
import { ContextApi } from "../context/ContextApi";
import { CiHeart } from "react-icons/ci";

const Card = ({ item }) => {
  const { addToCart, addToWishlist } = useContext(ContextApi);
  return (
    <div className="rounded-md overflow-hidden shadow-md bg-white relative">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />
      <span
        onClick={() => addToWishlist(item)}
        className="absolute z-40 top-2 right-1 text-xl text-red-500 bg-white rounded-full w-8 h-8 flex justify-center items-center cursor-pointer"
      >
        <CiHeart />
      </span>
      <div className="p-2">
        <h3 className="text-lg text-gray-800 font-semibold">{item.title}</h3>
        <div className="flex justify-between items-center">
          <span>{item.rating}</span>
          <span className="text-lg text-red-500 font-semibold">
            ${item.price}
          </span>
        </div>
        <p className="mt-1 text-gray-500 text-sm">
          {item.description.slice(0, 50)}
          <span className="text-red-400 hover:text-red-600 cursor-pointer ml-1">
            Read more...
          </span>
        </p>
        <button
          onClick={() => addToCart(item)}
          className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-md w-full mt-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
