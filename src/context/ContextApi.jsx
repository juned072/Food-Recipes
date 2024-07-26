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
    setWishlist((prevWishlist) => prevWishlist.filter((i) => i.id !== item.id));
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemWishlist = (item) => {
    setWishlist((prevWishlist) => prevWishlist.filter((i) => i.id !== item.id));
  };

  const removeItemCart = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== item.id));
  };

  return (
    <ContextApi.Provider
      value={{
        cart,
        addToCart,
        addToWishlist,
        wishlist,
        wishlistToCart,
        removeItemWishlist,
        removeItemCart,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, ContextProvider };
