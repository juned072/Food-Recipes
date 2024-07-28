import React, { useContext, useState, useEffect } from "react";
import { ContextApi } from "../context/ContextApi";
import heartFill from "../assets/heart-fill.png";
import heart from "../assets/heart.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { addToCart, addToWishlist, removeItemWishlist, wishlist } =
    useContext(ContextApi);
  const [addedWishlist, setAddedWishlist] = useState(false);

  useEffect(() => {
    const isItemInWishlist = wishlist.some((i) => i.id === item.id);
    setAddedWishlist(isItemInWishlist);
  }, [wishlist, item.id]);

  const handleWishlistClick = () => {
    if (addedWishlist) {
      removeItemWishlist(item);
    } else {
      addToWishlist(item);
    }
    setAddedWishlist(!addedWishlist);
  };

  return (
    <div className="rounded-md overflow-hidden shadow-md bg-white relative">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />
      <span
        onClick={handleWishlistClick}
        className="absolute z-40 top-2 right-1 bg-white rounded-full w-8 h-8 flex justify-center items-center cursor-pointer"
      >
        <img src={addedWishlist ? heart : heartFill} className="w-5 h-5" />
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
          <Link to={`/foodOverview/${item.id}`}>
            <span className="text-red-400 hover:text-red-600 cursor-pointer ml-1">
              Read more...
            </span>
          </Link>
        </p>
        <button
          onClick={() => addToCart(item)}
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white p-1 rounded-md w-full mt-1"
        >
          <IoBagHandleOutline className="mr-2 text-lg" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
