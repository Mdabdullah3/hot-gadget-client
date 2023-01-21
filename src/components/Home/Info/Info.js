import React from "react";
import phone from "../../../Assets/info/phone.png";
import camrea from "../../../Assets/info/camera.png";
import headPhone from "../../../Assets/info/headphone.png";
const Info = () => {
  return (
    <div className="md:flex mt-20 text-white font-mono md:px-10 px-10 gap-8">
      <div class="card lg:card-side shadow-xl mt-10  rounded bg-gradient-to-r from-[#0D5EAA] to-[#18ACC6] px-4 flex-1">
        <figure>
          <img className="md:pt-0 pt-2 w-32" src={phone} alt="Album" />
        </figure>
        <div class="card-body items-center mt-24">
          <h2 class="card-title">Enjoy New Series</h2>
          <p>Most Popular Phones Here</p>
        </div>
      </div>

      <div class="card lg:card-side  shadow-xl mt-10  px-4 rounded bg-gradient-to-r to-[#FF8549] from-[#FF4B44] flex-1">
        <figure>
          <img className="md:pt-0 pt-2 w-32" src={camrea} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title items-center mt-24">Art Of Photography </h2>
          <p>Camera Canon Sp 3.0mn</p>
        </div>
      </div>

      <div class="card lg:card-side mt-10  shadow-xl rounded bg-gradient-to-r from-[#156355] to-[#00C2B4] px-4 flex-1">
        <figure>
          <img className="md:pt-0 pt-2 w-32" src={headPhone} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title items-center mt-24">New Colors 2022 </h2>
          <p>Mix Headphone Context</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
