import React, { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ContextApi } from "../context/ContextApi";

const Wishlist = () => {
  const { wishlist } = useContext(ContextApi);
  return (
    <div className="max-w-screen-lg min-h-[80vh] mx-auto my-5 shadow-md rounded-md p-2">
      <div>
        <IoMdArrowRoundBack className="cursor-pointer text-2xl" />
      </div>
      <div>
        <h3 className="text-center text-2xl font-bold"> Wishlist</h3>
      </div>
      <div className="max-w-screen-md m-auto flex flex-wrap items-center justify-center gap-5 mt-8">
        {wishlist.map((item) => {
          return (
            <div className="shadow-md rounded-md overflow-hidden">
              <div className="flex space-x-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-32 object-cover"
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>price</p>
                  <button>add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
