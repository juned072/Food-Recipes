import React from "react";
import Data from "../database/Data";
import Card from "../components/Card";
const Home = () => {
  return (
    <div className="max-w-screen-lg bg-red-400 mx-auto my-5">
      <div className="grid grid-cols-3 gap-5">
        {Data.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
