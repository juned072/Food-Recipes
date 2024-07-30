import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import { ContextProvider } from "./context/ContextApi";
import FoodDetails from "./pages/FoodDetails";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/foodOverview/:id" element={<FoodDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
