import React from "react";
import oppo from "../../../Assets/brands/oppo.png";
import mi from "../../../Assets/brands/mi.png";
import samsung from "../../../Assets/brands/samsung.png";
import lenova from "../../../Assets/brands/lenova.png";
import apple from "../../../Assets/brands/apple.png";
import asuss from "../../../Assets/brands/assus.png";
const Brands = () => {
  const brands = [
    {
      id: 1,
      img: oppo,
      dis: "The Worlds leading smart device manufacturers and innovators",
    },
    { id: 2, img: mi, dis: "Making Quality Technology Accessible to Everyone" },
    { id: 3, img: samsung, dis: "Taking the lead in tech innovation" },
    {
      id: 4,
      img: lenova,
      dis: "Lenovo is one of the worlds leading personal technology companies",
    },
    {
      id: 5,
      img: apple,
      dis: "The power and flexibility to do whatever needs doing",
    },
    {
      id: 6,
      img: asuss,
      dis: "Dedicated to creating products for today’s and tomorrow’s smart life",
    }
  ];
  return (
    <section>
      <h1 className="text-center text-3xl md:text-4xl text-[#FF8549] font-bold mt-40 font-mono">
        Shop By {" "}
        <span className="border-b-4 text-black border-[#FF8549]">Brands</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 mx-8 md:mx-28 relative font-mono">
        {brands.map((brand) => (
          <div key={brand.id}>
            <div class="card w-11/12 md:h-52 mb-10 bg-base-100 shadow-xl rounded-lg">
              <div class="card-body">
                <div class="card-actions justify-center">
                  <img className="w-36 items-center" src={brand.img} alt="" />
                </div>
                <p className="absolute bottom-10 font-semibold hidden md:block">{brand.dis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
