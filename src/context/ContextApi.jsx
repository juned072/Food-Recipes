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

  return (
    <ContextApi.Provider value={{ cart, addToCart, addToWishlist, wishlist }}>
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, ContextProvider };
