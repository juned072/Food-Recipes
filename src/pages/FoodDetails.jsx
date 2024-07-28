import React, { useContext, useEffect, useState } from "react";
import data from "../database/Data";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { ContextApi } from "../context/ContextApi";

const FoodDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { increaseItem, decreaseItem, addToCart, addToWishlist } =
    useContext(ContextApi);

  const getItemById = (id) => {
    return data.find((item) => item.id === parseInt(id));
  };

  useEffect(() => {
    const fetchedItem = getItemById(id);
    setItem(fetchedItem);
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="flex mb-4">
        <Link to={"/"}>
          <div className="bg-red-600 hover:bg-red-700 transition-colors duration-300 w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
            <IoMdArrowRoundBack className="text-white text-xl" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5">
        <div className="md:w-1/2">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-md w-full object-cover md:h-96 h-72"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold py-2">{item.title}</h3>
          <p className="block mb-2">
            <span className="mr-1">Rating:</span> {item.rating}
          </p>
          <p className="mb-2">
            <span className="mr-1">Availability:</span>
            <span className={item.inStock ? "text-green-600" : "text-red-600"}>
              {item.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p className="mb-2">
            Category:<span className="ml-1 text-gray-500">{item.category}</span>
          </p>
          <p className="mb-4">
            Price:
            <span className="text-xl font-bold text-red-500">
              ${item.price}
            </span>
          </p>
          <p className="mb-4 text-gray-800">{item.description}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => addToWishlist(item)}
              className="flex items-center bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-all duration-300"
            >
              <CiHeart className="mr-2" /> Wishlist
            </button>
            <button
              onClick={() => addToCart(item)}
              className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300"
            >
              <IoBagHandleOutline className="mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
