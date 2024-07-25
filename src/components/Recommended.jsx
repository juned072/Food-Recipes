import React from "react";

const Recommended = ({ setFilter, filter }) => {
  return (
    <div>
      <button
        onClick={() => setFilter("All")}
        className={`${
          filter === "All"
            ? "bg-red-500 text-white"
            : "hover:bg-red-500 hover:text-white"
        } p-2 mx-2 rounded-md border`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("veg")}
        className={`${
          filter === "veg"
            ? "bg-red-500 text-white"
            : "hover:bg-red-500 hover:text-white"
        } p-2 mx-2 rounded-md border`}
      >
        Veg
      </button>
      <button
        onClick={() => setFilter("non-veg")}
        className={`${
          filter === "non-veg"
            ? "bg-red-500 text-white"
            : "hover:bg-red-500 hover:text-white"
        } p-2 mx-2 rounded-md border`}
      >
        Non-veg
      </button>
    </div>
  );
};

export default Recommended;
