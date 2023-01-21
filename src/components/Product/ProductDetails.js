import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    fetch(`https://enigmatic-mountain-34268.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [productId]);

  return (
    <div>
      <div className="font-mono product-details-info">
        <h1 className="text-center text-4xl font-semibold pt-24 text-white">
          {productDetails.name}
        </h1>
        <p className="text-center text-3xl font-semibold text-white pt-2">
          {productDetails.Brand}
        </p>
      </div>
      <div>
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row font-mono lg:ml-40">
            <img
              src={productDetails.img}
              classNames="rounded-lg shadow-2xl"
              alt=""
            />
            <div className="px-10">
              <h1 class="text-3xl font-bold">{productDetails.name}</h1>
              <p class="py-2 text-2xl font-semibold">
                Tk {productDetails.price}
              </p>
              <p class="py-2 text-xl font-semibold">
                Brand:{" "}
                {productDetails.Brand ? productDetails.Brand : "Not Found"}
              </p>
              <p class="py-2 text-xl font-semibold">
                Resolution:{" "}
                {productDetails.resolution
                  ? productDetails.resolution
                  : "Not Found"}
              </p>
              <p class="py-2 text-xl font-semibold">
                Camera:{" "}
                {productDetails.camera ? productDetails.camera : "Not Found"}
              </p>
              <p class="py-2 text-xl font-semibold">
                Ram: {productDetails.RAM ? productDetails.RAM : "Not Found"}
              </p>
              <p class="py-2 text-xl font-semibold">
                Rom: {productDetails.ROM ? productDetails.ROM : "Not Found"}
              </p>
              <p class="py-2 text-xl font-semibold">
                Chipset:{" "}
                {productDetails.Chipset ? productDetails.Chipset : "Not Found"}
              </p>
              <p class="py-2 text-xl font-semibold">
                Battery:{" "}
                {productDetails.battery ? productDetails.battery : "Not Found"}
              </p>
              <p class="py-2 text-xl font-semibold">
                Size: {productDetails.Size ? productDetails.Size : "Not Found"}
              </p>
              <p class="py-2 text-xl font-semibold">
                Stock: {productDetails.stock ? productDetails.stock : "Unsold"}
              </p>
              <p class="py-2 text-md">
                {productDetails.discription
                  ? productDetails.discription
                  : "Not Found"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
