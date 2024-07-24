import React from "react";
import Data from "../database/Data";
import Card from "../components/Card";
const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-5">
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {Data.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
