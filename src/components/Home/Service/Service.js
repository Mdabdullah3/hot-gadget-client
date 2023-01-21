import React from "react";
import "./Service.css";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlineEditNote, MdAssignmentReturn } from "react-icons/md";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
const Service = () => {
  return (
    <div className="service grid grid-cols-1 mt-10 px-10  md:grid-cols-4 text-white font-mono py-20">
      <div className="flex items-center gap-5 pl-10 mb-5">
        <div className="text-6xl text-white">
          <RiShoppingCart2Line />
        </div>
        <div>
          <h1>Free Shipping</h1>
          <p> For all oders over $50 </p>
        </div>
      </div>
      <div className="flex items-center gap-5 pl-10 mb-5">
        <div className="text-6xl text-white">
          <MdAssignmentReturn />
        </div>
        <div>
          <h1>90 Days Return </h1>
          <p> If goods have problems </p>
        </div>
      </div>
      <div className="flex items-center gap-5 pl-10 mb-5">
        <div className="text-6xl text-white">
          <BsFillCreditCard2BackFill />
        </div>
        <div>
          <h1>Secure Payment </h1>
          <p> 100% secure payment </p>
        </div>
      </div>
      <div className="flex items-center gap-5 pl-10 mb-5">
        <div className="text-6xl text-white">
          <MdOutlineEditNote />
        </div>
        <div>
          <h1>Online Support </h1>
          <p> Technical 24/7 </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
