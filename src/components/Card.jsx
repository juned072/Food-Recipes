import React from "react";

const Card = ({ item }) => {
  return (
    <div className="w-80 rounded-md overflow-hidden shadow-md bg-white">
      <img src={item.image} className="w-full h-52 object-cover" />
      <div className="p-2">
        <h3 className="text-lg text-gray-800 font-semibold">{item.title}</h3>
        <div className="flex justify-between items-center mt-1">
          <span>{item.rating}</span>
          <span className="text-xl text-red-500 font-semibold">
            ${item.price}
          </span>
        </div>
        <p className="mt-1 text-gray-700">{item.description}</p>
        <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-md w-full mt-1">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
