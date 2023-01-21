import React from "react";
import TestiMonialsDetails from "./TestiMonialsDetails/TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import UseReviews from "../../../Hook/UseReviews";
import "./Reviews.css";
import { Link } from "react-router-dom";
const Reviews = () => {
  const [review] = UseReviews();
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <h1 className="text-center text-4xl font-bold font-mono mt-28 text-[#156355]">
        Let them speak for us !
      </h1>
      <p className="text-center text-xl font-bold font-mono">
        Some impresssions from our customers
      </p>
      <section id="testimonial" className="testimonials">
        <div>
          <div>
            <div>
              <OwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme"
                {...options}
              >
                {review.slice(0, 8).map((testiMonialDetail) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail._id}
                    />
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:w-1/6 mx-auto md:w-3/6 px-10 md:px-20 lg:px-0 mt-10 font-mono">
        <Link to='/review'>
          <button class="btn bg-gradient-to-r from-[#156355] to-[#00C2B4] text-white text-xl border-none rounded w-full capitalize">
            See All Reviews
          </button>
        </Link>
      </div>
    </>
  );
};

export default Reviews;
