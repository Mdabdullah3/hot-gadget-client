import React from "react";
import { Link } from "react-router-dom";
import UseProducts from "../../../Hook/UseProducts";
import "./Product.css";
import ProductShow from "./ProductShow";
const Product = () => {
  const [product] = UseProducts();
  return (
    <section className="mt-40 font-mono product-info">
      <h1 className="md:text-5xl text-3xl text-center font-semibold text-[#FF8549]">
        Most Popular{" "}
        <span className="border-b-4 text-black border-[#FF8549]">Product</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-4 md:px-28 md:gap-5 mt-20 relative">
        {product.slice(0, 6).map((item) => (
          <ProductShow key={item._id} item={item}></ProductShow>
        ))}
      </div>
      <div className="lg:w-1/6 mx-auto md:w-3/6 w-9/12 md:px-20 lg:px-0">
        <Link to="/product">
          <button class="btn bg-gradient-to-r text-white to-[#FF8549] from-[#FF4B44] text-xl border-none rounded w-full">
            See All Product
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Product;
