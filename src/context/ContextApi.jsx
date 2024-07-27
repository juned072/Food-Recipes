import React, { createContext, useState } from "react";

const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1, total: (i.qty + 1) * i.price }
            : i
        );
      } else {
        return [...prevCart, { ...item, qty: 1, total: item.price }];
      }
    });
  };

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const wishlistToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1, total: (i.qty + 1) * i.price }
            : i
        );
      } else {
        return [...prevCart, { ...item, qty: 1, total: item.price }];
      }
    });
  };

  const removeItemWishlist = (item) => {
    setWishlist((prevWishlist) => prevWishlist.filter((i) => i.id !== item.id));
  };

  const removeItemCart = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== item.id));
  };

  const increaseItem = (item) => {
    setCart((prevCart) => {
      return prevCart.map((i) =>
        i.id === item
          ? { ...i, qty: i.qty + 1, total: (i.qty + 1) * i.price }
          : i
      );
    });
  };

  const decreaseItem = (item) => {
    setCart((prevCart) => {
      return prevCart.map((i) =>
        i.id === item && i.qty > 1
          ? { ...i, qty: i.qty - 1, total: (i.qty - 1) * i.price }
          : i
      );
    });
  };

  const totalItemPrice = () => {
    return cart.reduce((total, item) => total + item.qty * item.price, 0);
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
        increaseItem,
        decreaseItem,
        totalItemPrice,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, ContextProvider };
