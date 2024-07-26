import React, { createContext, useState } from "react";

const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const wishlistToCart = (item) => {
    setWishlist((prevWishlist) => prevWishlist.filter((i) => i.id !== item));
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <ContextApi.Provider
      value={{ cart, addToCart, addToWishlist, wishlist, wishlistToCart }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, ContextProvider };
