import React from "react";
import SideBar from "../components/SideBar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="grid grid-cols-8 gap-4 mt-4">
      <div className="col-span-2 bg-yellow-50">
        <SideBar />
      </div>
      <div className="col-span-6 rounded-lg shadow ">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
