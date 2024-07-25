import React, { createContext } from "react";

const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  return (
    <ContextApi.Provider value={{ value, setValue }}>
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, ContextProvider };
