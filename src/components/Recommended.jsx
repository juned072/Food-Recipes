import React from "react";

const Recommended = () => {
  return (
    <div>
      <button className="p-2 mx-2 rounded-md border hover:bg-red-500 hover:text-white">
        All
      </button>
      <button className="p-2 mx-2 rounded-md border hover:bg-red-500 hover:text-white">
        Veg
      </button>
      <button className="p-2 mx-2 rounded-md border hover:bg-red-500 hover:text-white">
        Non-veg
      </button>
    </div>
  );
};

export default Recommended;
