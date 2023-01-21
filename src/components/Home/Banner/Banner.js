import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../Assets/banner.png";
import img2 from "../../../Assets/banner1.png";
import img3 from "../../../Assets/banner2.png";
import img4 from "../../../Assets/banner3.png";
import "./Banner.css";
export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
    };
    return (
      <section className="bg-gradient-to-r from-[#156355] to-[#00C2B4]  font-mono">
        <div className="w-11/12 mx-auto">
          <Slider {...settings}>
            <div class="hero lg:ml-20 mt-10">
              <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img1} alt="" />
                <div>
                  <h1 class="text-3xl text-white">New Arrivales 2022</h1>
                  <p class="py-6 text-3xl md:text-7xl font-bold text-white">
                    The Latest Apple 14 Pro Super Energy
                  </p>
                  <button class="btn collection-btn font-semibold px-10 text-lg">
                    Explore
                  </button>
                </div>
              </div>
            </div>
            <div class="hero md:ml-20 mt-10">
              <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img4} alt="" />
                <div>
                  <h1 class="text-3xl text-white">New Arrivales 2022</h1>
                  <p class="py-6 text-3xl md:text-7xl font-bold text-white">
                    New Laptop Asuss Vivobook
                  </p>
                  <button class="btn collection-btn font-semibold  px-10 text-lg">
                    Explore
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                  <img src={img2} alt="" />
                  <div>
                    <h1 class="text-3xl text-white">2022 The Trends</h1>
                    <p class="py-6 text-3xl md:text-7xl font-bold text-white">
                      Famous HeadPhones Brand
                    </p>
                    <button class="btn collection-btn font-semibold  px-10 text-lg">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                  <img src={img3} alt="" />
                  <div>
                    <h1 class="text-3xl text-white">New Trends 2022</h1>
                    <p class="py-6 text-3xl md:text-7xl font-bold text-white">
                      Digital Camera Canon 12
                    </p>
                    <button class="btn collection-btn font-semibold  px-10 text-lg">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
