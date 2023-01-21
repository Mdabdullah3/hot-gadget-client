import React from "react";
import UseReviews from "../../Hook/UseReviews";
import { IoMdQuote } from "react-icons/io";
import { Link } from "react-router-dom";
const Reviews = () => {
  const [review] = UseReviews();
  return (
    <div className="mt-28 font-mono px-10 md:px-28">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="reviews-info pb-10 flex-1">
          <h1 className="text-secondary text-2xl font-bold">Testimonial</h1>
          <h1 className="text-accent text-2xl font-semibold">
            What Our Patients Says
          </h1>
        </div>
        <Link to="/addreviews">
          <button class="btn bg-gradient-to-r w-60 text-white to-[#FF8549] from-[#FF4B44] text-xl border-none rounded md:ml-60">
            Add Reviews
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {review.map((item) => (
          <div key={item._id}>
            <div class="card w-11/12 bg-base-100 shadow-xl h-72 mb-10">
              <p className="text-8xl absolute text-[#FF4B44] right-0 bottom-0 opacity-40">
                <IoMdQuote />
              </p>
              <div class="card-body">
                <p className="text-justify">{item.description}</p>
                <div class="card-actions justify-between mt-5 items-center">
                  <img
                    className="rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 w-32 h-32"
                    src={item.img}
                    alt=""
                  />
                  <div>
                    <h2 class="card-title">{item.name}</h2>
                    <p>{item.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
