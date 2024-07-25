import React, { createContext, useState } from "react";

const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <ContextApi.Provider value={{ cart, addToCart }}>
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, ContextProvider };
