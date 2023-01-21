import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductShow from "../Home/Product/ProductShow";

const Product = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://enigmatic-mountain-34268.herokuapp.com/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [page, size]);

  useEffect(() => {
    fetch("https://enigmatic-mountain-34268.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / size);
        setPageCount(pages);
      });
  }, [size]);
  return (
    <section className="mt-40 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-5xl text-center font-semibold text-[#FF8549]">
            All{" "}
            <span className="border-b-4 text-black border-[#FF8549]">
              Product
            </span>
          </h1>
        </div>
        <Link to="/addProducts">
          <button class="btn bg-gradient-to-r w-60 text-white to-[#FF8549] from-[#FF4B44] text-xl border-none rounded md:ml-60 ml-20 mt-10 md:mt-0">
            Add Products
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-10 md:px-28 gap-5 mt-28 relative">
        {product.map((item) => (
          <ProductShow key={item._id} item={item}></ProductShow>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <div class="btn-group gap-2">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              onClick={() => setPage(number)}
              className={
                page === number
                  ? "bg-red-500 rounded btn border-none text-white"
                  : "btn rounded border-none text-white"
              }
            >
              {number + 1}
            </button>
          ))}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="6">6</option>
            <option value="9" selected>
              9
            </option>
            <option value="18">18</option>
            <option value="27">27</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Product;
