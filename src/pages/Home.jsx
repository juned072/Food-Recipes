import React, { useState } from "react";
import Data from "../database/Data";
import Card from "../components/Card";
import Recommended from "../components/Recommended";

const Home = () => {
  const [filter, setFilter] = useState("All");

  const filteredCategory = Data.filter((item) => {
    if (filter === "All") {
      return true;
    }
    return item.category === filter;
  });

  return (
    <div className="max-w-screen-lg mx-auto my-5">
      <h2 className="text-center font-bold text-3xl my-8">
        Our <span className="text-red-500">Menu</span>
      </h2>
      <div className="p-2">
        <Recommended setFilter={setFilter} />
      </div>
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5 p-2">
          {filteredCategory.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
