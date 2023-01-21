import React from "react";
import { useNavigate } from "react-router-dom";

const ProductShow = ({ item }) => {
  const { img, price, stock, Brand, _id } = item;
  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div
      class="card w-11/12 bg-base-100 shadow-xl mb-20 h-[600px] "
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <figure class="px-10 pt-10">
        <img src={img} alt="product" class="rounded-lg" />
      </figure>
      <div class="card-body">
        <h1 className="pb-2 text-xl font-bold">Name: {item.name}</h1>
        <h1 className="pb-2 text-xl font-bold">Price: BDT {price}</h1>
        <h1 className="pb-2 text-xl font-bold">Stock: {stock}</h1>
        <h1 className="pb-2 text-xl font-bold">Brand: {Brand}</h1>
        <div class="card-actions">
          <button
            onClick={() => navigateToDetails(_id)}
            class="btn bg-gradient-to-r text-white to-[#FF8549] from-[#FF4B44] text-xl border-none rounded w-10/12 absolute bottom-5"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
