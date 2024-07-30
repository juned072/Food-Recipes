import React, { createContext, useState } from "react";
import toast from "react-hot-toast";

const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        toast.success("Item quantity increased in cart");
        return prevCart.map((i) =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1, total: (i.qty + 1) * i.price }
            : i
        );
      } else {
        toast.success("Item added to cart");
        return [...prevCart, { ...item, qty: 1, total: item.price }];
      }
    });
  };

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.find((i) => i.id === item.id)) {
        return prevWishlist;
      }
      toast.success("Item added to wishlist");
      return [...prevWishlist, item];
    });
  };

  const wishlistToCart = (item) => {
    addToCart(item);
  };

  const removeItemWishlist = (item) => {
    setWishlist((prevWishlist) => prevWishlist.filter((i) => i.id !== item.id));
    toast.success("Item removed from wishlist");
  };

  const removeItemCart = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== item.id));
    toast.success("Item removed from cart");
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
