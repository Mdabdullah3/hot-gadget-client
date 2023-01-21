import React from "react";
import about from "../../../Assets/about.png";
const About = () => {
  return (
    <div>
      <div className="md:flex justify-between px-10 md:px-20 items-center mt-20 md:mt-20 lg:mt-20 mb-40">
        <div className="flex-1 md:ml-10 mb-10 mt-40 font-mono">
          <h1 className="md:text-6xl text-4xl font-semibold pb-2">Top Rated Gadgets</h1>
          <p className="text-2xl">
            Don't waste Money, Use coupons Save a lot of money and time, get
            best deals
          </p>
          <button className="mt-8 rounded px-10 py-4 bg-gradient-to-r to-[#FF8549] from-[#FF4B44] text-xl font-semibold text-white">
            Phones
          </button>
        </div>
        <div className="banner-image flex-1 ">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
