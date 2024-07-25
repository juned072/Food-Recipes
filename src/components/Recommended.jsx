import React from "react";

const Recommended = ({ setFilter }) => {
  return (
    <div>
      <button
        onClick={() => setFilter("All")}
        className="p-2 mx-2 rounded-md border hover:bg-red-500 hover:text-white"
      >
        All
      </button>
      <button
        onClick={() => setFilter("veg")}
        className="p-2 mx-2 rounded-md border hover:bg-red-500 hover:text-white"
      >
        Veg
      </button>
      <button
        onClick={() => setFilter("non-veg")}
        className="p-2 mx-2 rounded-md border hover:bg-red-500 hover:text-white"
      >
        Non-veg
      </button>
    </div>
  );
};

export default Recommended;
