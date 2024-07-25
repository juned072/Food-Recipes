import React, { useContext } from "react";
import { ContextApi } from "../context/ContextApi";

const Cart = () => {
  const { cart } = useContext(ContextApi);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {cart.map((item) => (
            <div>
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
