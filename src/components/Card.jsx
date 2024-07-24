import React from "react";

const Card = ({ item }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-md bg-white">
      <img src={item.image} className="w-full h-40 object-cover" />
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
        <button className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-md w-full mt-1">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
